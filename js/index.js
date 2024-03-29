'use strict';

function openLiveMeeting() {
  window.open(COMMON.zoomLink, '_blank');
}

function toggleFullList() {
  const listLength = $('#js-future-meetings').attr("cnt");

  $('#js-future-meetings').attr("cnt", listLength === "1" ? "0" : "1");
  renderFutureMeetings();
}

function openHelp() {
  $('#js-help').removeClass('hidden');
  $('#js-popup-bg').removeClass('hidden');
}

function closeHelp() {
  $('#js-help').addClass('hidden');
  $('#js-popup-bg').addClass('hidden');
}

function getFirstName(id) {
  const memberRecord = MEMBER.find(member => member.id === id)?.name.split(/ /)[0];
  return memberRecord || 'Everyone';
}

function renderInitial(id) {
  const { title, header1, header2, header3, phone, email } = COMMON;
  const memberRecord = MEMBER.find(member => member.id === id);

  const firstName = getFirstName(id);
  if (firstName !== 'Everyone') $('title').text(`${firstName}: `);
  const img = memberRecord ? `bg_${memberRecord.image}`: 'bg_f1';

  $('title').append(`${title}`);
  $('#js-image').addClass(`${img}`);
  
  $('#js-header1').text(`${header1} ${firstName}!`);
  $('#js-header2').text(header2);
  $('#js-header3').text(header3);

  $('#js-help-phone').text(phone);
  $('#js-help-email').html(`<a class="thin" style="font-size: 28px;" href="mailto:${email}">${email}</a>`);
}

function getGroupId(id) {
  const memberRecord = MEMBER.find(member => member.id === id);
  const groupIdFromUrl = ['A', 'B'].includes(id) ? id : ''
  const groupIdFromMember = memberRecord?.group ? memberRecord.group : '';
  return groupIdFromUrl || groupIdFromMember || '';
}

function getGroupObject(groupId) {
  switch (groupId) {
    case 'A':
      return GROUP_A;

    case 'B':
      return GROUP_B;

    default:
      return {};
  }
}

function renderMessage(id) {
  const memberRecord = MEMBER.find(member => member.id === id);
  const groupId = getGroupId(id);
  const groupData = getGroupObject(groupId);
  if (Object.keys(groupData).length === 0) return;

  console.log("test", id, groupId)
  if (['A', 'B'].includes(id)) $('#js-message-title').html(`Announcement - Group ${groupId}`);

  const message = memberRecord ? [...memberRecord?.message, ...groupData?.group_message] : [...groupData?.group_message, ...groupData?.nonmember_message];
  const filteredMessage = message.filter(item => item.show?.toLowerCase() === "yes");

  if (filteredMessage.length === 0) {
    $('#js-message').append(`
        <li class="li_main">
          <div class="w2"></div>
          <div class="w3">There is no message for you.
          </div>
          <div class="w1"></div>
        </li>`);
    return;
  }

  $('#js-message').append(filteredMessage.map(message => `
    <li class="li_main">
    <div class="w2"><div><img class='green_fill' width=30 src="./img/success.svg" title="checked"></div>
      &nbsp; ${message.date}</div>
      <div class="w3 flex_nowrap">${message.pic ? `<img class='emoji' src='./edit-pic/${message.pic}.gif'>` : ''} ${message.message}</div>
      <div class="w1"><a class="thin" target="top" href="${message.link}">${message.link ? `Go to Link &gt;` : ''}</a></div>
    </li>`));
}

function renderPastMeetings(id) {
  const groupId = getGroupId(id);
  const groupData = getGroupObject(groupId);
  if (Object.keys(groupData).length === 0) return;

  const absence = MEMBER.find(member => member.id === id)?.absence || [];
  const { lastSession, schedule } = groupData;
  const sessionIndex = parseInt(lastSession, 10);
  const list = schedule.filter(item => item.session <= sessionIndex).sort((a, b) => b.session - a.session);
  if (list.length === 0) {
    $('#js-past-meetings').append(`
        <li class="li_main">
          <div class="w2"></div>
          <div class="w3">The first meeting has not started yet.
          </div>
          <div class="w2"></div>
        </li>`);
    return;
  }

  // ${absence.includes(session.session) ? `<img class='red_fill' width=30 src="./img/fail.svg" title="You're absent">` : `<img class='green_fill' width=30 src="./img/success.svg" title="checked">`}
    $('#js-past-meetings').append(list.map(session => `
      <li class="li_main">
        <div class="w2 center">
        ${session.session}
        </div>
          <div class="w3">${session.linkTitle }</div>
          <div class="w2"><a id="" target='top' class="thin" href="${session.link}">${session.link ? `Click here &gt;` : '' }</a></div>
      </li>`));
}

function renderFutureMeetings() {
  const groupId = getGroupId(id);
  const groupData = getGroupObject(groupId);
  if (Object.keys(groupData).length === 0) return;

  const { lastSession, schedule } = groupData;
  const sessionIndex = parseInt(lastSession, 10);
  const list = schedule.filter(item => item.session > sessionIndex).sort((a, b) => a.session - b.session);

  $('#js-future-meetings').html(`
      <li class="li_main">
        <div class="w2 li_title">&nbsp;&nbsp;&nbsp;&nbsp; Date</div>
        <div class="w3 li_title">Meeting</div>
        <div class="w1"><a id="" class="thin" href=""> </a></div>
      </li>`);

  if (list.length === 0) {
    $('#js-future-meetings').append(`
        <li class="li_main">
          <div class="w2"></div>
          <div class="w3">You completed all Meetings!.
          </div>
          <div class="w1"></div>
        </li>`);
    return;
  }

  const listLength = $('#js-future-meetings').attr("cnt");
  const updatedList = listLength === "1" ? [ list[0] ] : list;

  $('#js-full-list').text(listLength === "1" ? `Full List (${list.length} Left) >` : 'Next Meeting >');

  $('#js-future-meetings').append(updatedList.map(session => `
      <li class="li_main">
        <div class="w2">
          <img class='gray_fill' width=30 src="./img/success.svg" title="checked">
        &nbsp; ${session.date}</div>
          <div class="w3">#${session.session} ${session.title}</div>
          <div class="w1"><a id="" target='top' class="thin" href="${COMMON.zoomLink}">Join Meeting</a></div>
      </li>`));
}

function renderDailyPractice(groupData) {

  const { lastSession, schedule } = groupData;
  const sessionIndex = parseInt(lastSession, 10);
  const session = schedule.find(item => item.session === sessionIndex);
  if (session.link !== "") {
    const tmpLink = session.link.split('/');    
    const dailyLink = tmpLink.some(item => item.includes('yout')) ? `https://www.youtube.com/embed/${tmpLink[tmpLink.length - 1]}`: session.link;

    $('#js-daily').html(`
    <p id='' class='font_l ind_l'>Week ${lastSession} Daily Practice</p>
    <div class='font_m ind_l'>&nbsp;&nbsp;${session.linkTitle}</div>
    <div id='js-demo-note' class='ind_l line_sp'> 
      <iframe class="iframe" src="${dailyLink}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <p class="mg_top"></p> 
  `);
}
}
{/* <div id='js-demo-note' class='ind_l'>* The last meeting was held on ${session.date}</div>   */}

function renderAdmin() {
  const memberHtml = MEMBER.map(member => `<li class="li_main admin_height">
        <div class="w2">&nbsp; ${member.name}</div>
        <div class="w1a center">${member.group ? member.group: '<font color=red>NONE</font>'}</div>
        <div class="w3"><a id="" target='top' class="thin" href="./index.html?id=${member.id}">https://dmtstudy.github.io/?id=${member.id}</a></div>
      </li>`).join('');

  $('#js-admin').html(`
    <p id='' class='col-12 font_l ind_l float'>Member List <font color='#c00000'>(Admin Only)</font></p>
    <ul id="" class="al_center" aria-live="polite">
      <li class="li_main">
        <div class="w2 li_title">&nbsp;&nbsp;&nbsp;&nbsp; Name</div>
        <div class="w1a li_title">&nbsp;&nbsp; Group</div>
        <div class="w3 li_title">Address</div>
      </li>
      ${memberHtml}
    </ul>
  `);
}

function renderDefault() {
  $('#js-past-meetings').hide();
  $('#js-past-meetings-title').hide();
  $('#js-message-title').hide();
  $('#js-message').hide();
  $('#js-daily').hide();

  $('#js-default').html(`
  <p id='' class='col-12 font_l ind_l float'>Group Pages</p>
  <div class="w4 ind_l">&nbsp;&nbsp; GROUP A PAGE&nbsp;&nbsp;&nbsp;&nbsp; <a id="" target='top' class="thin" href="./index.html?id=A">https://dmtstudy.github.io/?id=A</a></div>
  <div class="w4 ind_l">&nbsp;&nbsp; GROUP B PAGE&nbsp;&nbsp;&nbsp;&nbsp; <a id="" target='top' class="thin" href="./index.html?id=B">https://dmtstudy.github.io/?id=B</a></div>
`);
}

$(_=> {
  const param = window.location.search.split(/=/);
  const id = param.length === 2 ? param[1] : 'default';
  const groupId = getGroupId(id);
  const groupData = getGroupObject(groupId);
  
  renderInitial(id);
  renderMessage(id);
  renderPastMeetings(id);
  // renderFutureMeetings();
  if (Object.keys(groupData).length === 0) renderDefault();


  if (groupData?.showDailyPractice?.toLowerCase() === "yes")  renderDailyPractice(groupData);
  if (COMMON.id === id) renderAdmin();
});
