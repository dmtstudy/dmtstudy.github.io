'use strict';
// PLEASE EDIT ONLY CONTENT PORTION BELOW (INSIDE OF DOUBLE QUOTATION "")

const COMMON = {

  title: "Mindful Moving Study", 
  
  header1: "Hi",
  header2: "Ready to Move?",
  header3: "",

  zoomLink: "https://drexelprivate.zoom.us/j/86315733418?pwd=WFQ4eldUYlRrNSsrbzJZOCtVejRUUT09",

  phone: "215-490-9650",
  email: "mbmresearch@drexel.edu",

  // admin id
  id: "admin",
};

const GROUP_A = {
  // please update this once you complete a session
  lastSession: "9",

  showDailyPractice: "yes", // yes or no

  // pic: thumbup, heart, gift, cry, notice
  group_message: [
    { 
      show: "yes",
      date: "Jul 29, 2022",
      message: "Great ninth session, everyone! The group's next session will be on Wednesday August 3rd at 10:00 am Eastern Time. Click the button above to join us!",
      pic: "",
      link: "",
    },
    {
      show: "yes",
      date: "Jun 15, 2022",
      message: "Scroll down to see the daily practice video. Happy Moving!",
      pic: "",
      link: "",
    },  
  ],

  // non-member message won't show on individual page
  nonmember_message: [
    { 
      show: "no",
      date: "Apr 05, 2022",
      message: "[This is not your individual page]",
      pic: "",
      link: "",
    },  
  ],
  
  schedule: [
    {
      session: 1,
      date: "Jun 1, 2022",
      title: "[mtg @ xx apm]",  // don't use this
      completedTitle: "[completed msg]", // don't use this
      link: "https://youtu.be/0GH81Ab3VXQ",
      linkTitle: "Breath Awareness Meditation",
    },
    {
      session: 2,
      date: "Jun 8, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/g9h9RnpT8l0",
      linkTitle: "Liberate Your Shoulders",
    },
    {
      session: 3,
      date: "Jun 15, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/ONfjAyDSw1k",
      linkTitle: "Hand Dance",
    },
    {
      session: 4,
      date: "Jun 22, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/TqAHOzMt7F0",
      linkTitle: "Moving in space -with scarves",
    },
    {
      session: 5,
      date: "Jun 29, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/GvnvXE8uy0I",
      linkTitle: "Connection Dance - Part 1",
    },
    {
      session: 6,
      date: "Jul 6, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/sClQZcpvQTk",
      linkTitle: "Moving with Scarves",
    },
    {
      session: 7,
      date: "Jul 13, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/7SpRmVxjNeY",
      linkTitle:"Sensory exploration",
    },
    {
      session: 8,
      date: "Jul 20, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/Gef-6rndkHI",
      linkTitle: "Community Stretch - Self and Other", 
    },
    {
      session: 9,
      date: "Jul 27, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/LrojB1ODTqQ",
      linkTitle: "Imagery based Movement",
    },
    {
      session: 10,
      date: "August 3, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/KIs4ReZVAR0",
      linkTitle: "Connection Dance - Part2",
    },
    {
      session: 11,
      date: "August 10, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/gbHPj-ueVhI",
      linkTitle: "Breath-guided Movement",
    },
  ],
};
// END OF GROUP A

// START OF GROUP B
const GROUP_B = {
  // please update this once you complete a session
  lastSession: "7",

  showDailyPractice: "yes", // yes or no

  group_message: [
    { 
      show: "yes",
      date: "Jul 27, 2022",
      message: "Great seventh session, everyone! Our next group session will be on Wednesday August 3rd, at 11:30am Eastern Time. Please click the Live Session button above to join us!",
      pic: "",
      link: "",
    },
    {
      show: "yes",
      date: "Jun 15, 2022",
      message: "Scroll down to see the daily practice video. Happy moving!",
      pic: "",
      link: "",
    },  
  ],

  // non-member message won't show on individual page
  nonmember_message: [
    { 
      show: "no",
      date: "Jun 05, 2022",
      message: "[This is not your individual page]",
      pic: "",
      link: "",
    },  
  ],
  
  schedule: [
    {
      session: 1,
      date: "Jun 15, 2022",
      title: "[mtg @ xx apm]",  // don't use this
      completedTitle: "[completed msg]", // don't use this
      link: "https://youtu.be/0GH81Ab3VXQ",
      linkTitle: "Breath Awareness Meditation",
    },
    {
      session: 2,
      date: "Jun 22, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/g9h9RnpT8l0",
      linkTitle: "Liberate Your Shoulders",
    },
    {
      session: 3,
      date: "Jun 29, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/ONfjAyDSw1k",
      linkTitle: "Hand Dance",
    },
    {
      session: 4,
      date: "Jul 6, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/TqAHOzMt7F0",
      linkTitle: "Moving in Space - with scarves",
    },
    {
      session: 5,
      date: "Jul 13, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/GvnvXE8uy0I",
      linkTitle: "Connection Dance - Part 1",
    },
    {
      session: 6,
      date: "Jul 20, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/sClQZcpvQTk",
      linkTitle: "Moving with Scarves",
    },
    {
      session: 7,
      date: "Jul 27, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/7SpRmVxjNeY",
      linkTitle: "Sensory exploration",
    },
    {
      session: 8,
      date: "Aug 3, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/Gef-6rndkHI",
      linkTitle: "Community Stretch-Self and other",
    },
    {
      session: 9,
      date: "Aug 10, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/LrojB1ODTqQ",
      linkTitle: "Imagery based Movement",
    },
    {
      session: 10,
      date: "Aug 24, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/KIs4ReZVAR0",
      linkTitle: "Connection Dance - Part2",
    },
    {
      session: 11,
      date: "Aug 31, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/gbHPj-ueVhI",
      linkTitle: "Breath-guided Movement",
    },
  ],
};
// END OF GROUP B

