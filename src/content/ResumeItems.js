import React from "react";

const ResumeItems = () => {
  return [
    {
      title: "Web Designer",
      company: "IEM",
      date: "December 2019 - Present",
      URL: "https://iem.com/",
      location: "Morrisville, NC",
      description: (
        <div>
          <ul>
            <li>
              Maintain the company’s corporate website and develop and design
              digital services and information to support homeland security and
              emergency management programs.
            </li>
            <li>
              Optimize website for responsive design across multiple platforms.
            </li>
            <li>
              Collect, monitor and review statistics and provide analysis on the
              website’s health, engagement and performance
            </li>
            <li>
              Contribute to development of data modeling software projects
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Front End Developer",
      company: "Zift Solutions",
      date: "April 2015 - December 2019",
      URL: "https://ziftsolutions.com/",
      location: "Cary, NC",
      description: (
        <div>
          <ul>
            <li>
              Implement and maintain custom web marketing plugins for numerous
              clients; including Xerox, Dell, HP, Lenovo, Oracle, and Google.
            </li>
            <li>
              Construct email marketing campaigns and templates to client
              specifications.
            </li>
            <li>
              Notable Accomplishments:
              <ul>
                <li>
                  Solved major accessibility issues involving mobile platforms.
                </li>
                <li>
                  Overhauled production process for instructional videos for
                  using the Zift platform
                </li>
                <li>Administered extensive branding updates for clients.</li>
                <li>
                  Augmented website templates to match current design trends
                </li>
              </ul>
            </li>
          </ul>
        </div>
      )
    },
    {
      title: "Campus Liaison",
      company: "Outside Media Group",
      date: "August 2013 - May 2014",
      URL: "http://www.outsidemediagroup.com/",
      location: "Bozeman, MT",
      description: (
        <div>
          <ul>
            <li>
              Implemented promotion campaigns for Outside Bozeman Magazine and
              The Blue Light Student Guide & Coupon Book.
            </li>
            <li>
              Secured promotional partnerships with campus organizations and
              local businesses.
            </li>
            <li>Administered up to date web presence: Facebook, Wordpress.</li>
          </ul>
        </div>
      )
    }
  ];
};

export default ResumeItems;
