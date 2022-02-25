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
  const memberRecord = MEMBER_A.find(member => member.id === id)?.name.split(/ /)[0];
  return memberRecord || 'Everyone';
}

function renderInitial(id) {
  const { title, header1, header2, header3, phone, email } = COMMON;
  const memberRecord = MEMBER_A.find(member => member.id === id);

  const firstName = getFirstName(id);
  if (firstName !== 'Everyone') $('title').text(`${firstName}: `);
  const img = memberRecord ? `bg_${memberRecord.image}`: 'bg_f1';

  $('title').append(`${title}`);
  $('#js-image').addClass(`${img}`);
  
  $('#js-header1').text(`${header1} ${firstName}!`);
  $('#js-header2').text(header2);
  $('#js-header3').text(header3);
    // $('#js-message-title').text(`Message to ${firstName}`);

  $('#js-help-phone').text(phone);
  $('#js-help-email').html(`<a class="thin" style="font-size: 28px;" href="mailto:${email}">${email}</a>`);
}

function renderMessage(id) {
  const memberRecord = MEMBER_A.find(member => member.id === id);
  const message = memberRecord ? [...memberRecord?.message, ...GROUP_A?.group_message] : [...GROUP_A?.group_message, ...GROUP_A?.nonmember_message];
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
  const absence = MEMBER_A.find(member => member.id === id)?.absence || [];
  const { lastSession, schedule } = GROUP_A;
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
  const { lastSession, schedule } = GROUP_A;
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

function renderDailyPractice() {
  const { lastSession, schedule } = GROUP_A;
  const sessionIndex = parseInt(lastSession, 10);
  const session = schedule.find(item => item.session === sessionIndex);
  if (session.link !== "") {
    $('#js-daily').html(`
    <p id='' class='font_l ind_l'>Week ${lastSession} Daily Practice</p>
    <div class='font_m ind_l'>&nbsp;&nbsp;${session.linkTitle}</div>
    <div id='js-demo-note' class='ind_l line_sp'> 
      <iframe class="iframe" src="${session.link}" frameborder="0" allow="accelerometer; autoplay; encrypted-media; gyroscope; picture-in-picture" allowfullscreen></iframe>
    </div>
    <p class="mg_top"></p> 
  `);
  }
}
{/* <div id='js-demo-note' class='ind_l'>* The last meeting was held on ${session.date}</div>   */}

function renderAdmin() {
  const memberHtml = MEMBER_A.map(member => `<li class="li_main admin_height">
        <div class="w2">&nbsp;&nbsp; ${member.name}</div>
        <div class="w4"><a id="" target='top' class="thin" href="./index.html?id=${member.id}">https://dmtstudy.github.io/?id=${member.id}</a></div>
      </li>`).join('');

  $('#js-admin').html(`
    <p id='' class='col-12 font_l ind_l float'>Member List <font color='#c00000'>(Admin Only)</font></p>
    <div class="w4 ind_l">&nbsp;&nbsp; GROUP A PAGE&nbsp;&nbsp;&nbsp;&nbsp; <a id="" target='top' class="thin" href="./index.html">https://dmtstudy.github.io</a></div>
    <ul id="" class="al_center" aria-live="polite">
      <li class="li_main">
        <div class="w2 li_title">&nbsp;&nbsp;&nbsp;&nbsp; Name</div>
        <div class="w4 li_title">Address</div>
      </li>
      ${memberHtml}
    </ul>
  `);
}

$(_=> {
  const param = window.location.search.split(/=/);
  const id = param.length === 2 ? param[1] : 'default';
  renderInitial(id);
  renderMessage(id);
  renderPastMeetings(id);
  // renderFutureMeetings();
  if (GROUP_A.showDailyPractice.toLowerCase() === "yes")  renderDailyPractice();
  if (COMMON.id === id) renderAdmin();
});
