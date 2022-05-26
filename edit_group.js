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
  lastSession: "0",

  showDailyPractice: "no", // yes or no

  // pic: thumbup, heart, gift, cry, notice
  group_message: [
    { 
      show: "yes",
      date: "May 12, 2022",
      message: "We are ready to begin! The group's first session will be on Wednesday Jun 1st at 10:00 am Eastern Time. Click the button above to join us!",
      pic: "",
      link: "",
    },
    {
      show: "no",
      date: "Apr 15, 2022",
      message: "[msg body]",
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
      link: "",
      linkTitle: "Moving in space",
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
      link: "",
      linkTitle:"Sensory exploration",
    },
    {
      session: 8,
      date: "Jul 20, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "",
      linkTitle: "Mobilizing and Releasing Tension - Gentle Stretching", 
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
  lastSession: "0",

  showDailyPractice: "no", // yes or no

  group_message: [
    { 
      show: "yes",
      date: "Jun 12, 2022",
      message: "This is a group message from GROUP_B",
      pic: "",
      link: "",
    },
    {
      show: "no",
      date: "Jun 15, 2022",
      message: "[msg body]",
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
      date: "Jul 15, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/ONfjAyDSw1k",
      linkTitle: "Hand Dance",
    },
    {
      session: 4,
      date: "Jul 22, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/GvnvXE8uy0I",
      linkTitle: "Connection Dance - Part 1",
    },
    {
      session: 5,
      date: "Jul 29, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "",
      linkTitle: "Mobilizing and Releasing Tension - Gentle Stretching",
    },
    {
      session: 6,
      date: "Aug 6, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "",
      linkTitle: "Moving in Space",
    },
    {
      session: 7,
      date: "Aug 13, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/sClQZcpvQTk",
      linkTitle: "Moving with Scarves",
    },
    {
      session: 8,
      date: "Aug 20, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "",
      linkTitle: "Sensory exploration",
    },
    {
      session: 9,
      date: "Aug 27, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/LrojB1ODTqQ",
      linkTitle: "Imagery based Movement",
    },
    {
      session: 10,
      date: "Sep 3, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/KIs4ReZVAR0",
      linkTitle: "Connection Dance - Part2",
    },
    {
      session: 11,
      date: "Sep 10, 2022",
      title: "[mtg @ xx apm]",
      completedTitle: "[completed msg]",
      link: "https://youtu.be/gbHPj-ueVhI",
      linkTitle: "Breath-guided Movement",
    },
  ],
};
// END OF GROUP B

