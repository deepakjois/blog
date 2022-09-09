---
title: "Contributing to OSS"
date: 2021-04-30T12:00:00+05:30
# weight: 1
# aliases: ["/first"]
tags: ["tags"]
author: "Adithya Krishna"
showToc: true
TocOpen: false
draft: false
hidemeta: false
comments: false
description: "My first major contributions to oss"
canonicalURL: "https://canonical.url/to/page"
disableHLJS: false
disableShare: false
searchHidden: true
ShowReadingTime: true
ShowBreadCrumbs: true
ShowPostNavLinks: true
ShowWordCount: true
cover:
    image: "/images/FOC-30-04-21.png" # image path/url
    alt: "OSS Contribution" # alt text
    caption: "" # display caption under cover
    relative: false # when using page bundles set this to true
    hidden: false # only hide on current single page
editPost:
    URL: "https://github.com/adithyaakrishna/blog/contents/posts"
    Text: "Suggest Changes" # edit text
    appendFilePath: true # to append file path to Edit link
---

## What is Service Mesh?
A service mesh is a type of layer which is both dedicated one as well as a configurable infrastrucutre to facilitate S2S (service-to-service) communications between services or microservices through the use of a proxy,

A service mesh is a relatively simple concept, consisting of a bunch of network proxies paired with each service in an application, plus a set of task management processes. The proxies are called the data plane and the management processes are called the control plane in the Service Mesh. The data plane intercepts calls between different services and processes them, he control plane is the brain of the mesh that coordinates the behavior of proxies and provides APIs for operations and maintenance personnel to manipulate and observe the entire network.

![Service Mesh Everywhere](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/g7d00a4opfuta62uu8cy.jpg)

## About Layer5
[Layer5](https://layer5.io) is the service mesh company. Creator and maintainer of service mesh standards. Maker of [Meshery](https://meshery.io), the service mesh management plane.

We build projects to provide learning environments, deployment and operational best practices, performance benchmarks, create documentation, share networking opportunities, and more. Our shared commitment to the open source spirit pushes Layer5 projects forward.
![ada](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/3jfz79u6khjr0lg3z0o9.png)

## My Journey
It all started during the month of March '21 when Google Summer of Code was announced. So I had a keen interest towards Cloud Native and Cloud Native Projects like Kubernetes, Prometheus. I joined CNCF's Slack Channel and gave my introduction. Then I started to search for Project Ideas, with this I also made sure to be in touch with the community. 

Randomly after a few days, on 22 March 2021, I got a DM from [Abishek Kumar](https://www.linkedin.com/in/abishek-kumar-51a1761b/) regarding Meshery & Layer5's Projects whether I would join the community and contribute to the projects through CNCF slack channel. Ofc, I said Yes! and I guess the rest is history :)

So, I started going through the projects and I wanted to start with issues labeled `good first issue` , `area/ux` , `component/ui`. One new thing to me was Signing off the commits i.e DCO check for every Commit or PR.

My first issue was [This](https://github.com/layer5io/meshery/issues/2576) which was regarding the improper margins on the management page, a `component/ui` and `framework/react` issue :)
Tbh, it wasn't a huge amount of work, I just had to fix the padding values of the component as shown below and I was good to go

```javascript
paneSection: {
    backgroundColor: "#fff",
    padding: theme.spacing(3),
    borderRadius: 4,
  },
```

My first PR [This](https://github.com/layer5io/meshery/pull/2615) I have to say, when this was merged, the Happiness couldn't be explained 🎉

![PR Merged](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/e1xkoh8wrxqt30m106li.jpg)
 
From My PR being merged, working on UI, Upgrading Gatsby v2 to v3 for which I had to learn a bit about GraphQL, how Gatsby Plugins work ([PR](https://github.com/layer5io/layer5/pull/1767)) to me shifting to CI/CD Issues, writing blogs, learning golang(for mesheryctl issues) to having the most amazing as well as exciting 1-1 call with [Lee Calcote](https://www.linkedin.com/in/leecalcote/), Founder & CEO of Layer5 to discuss about my interests/aims and some future ideas/goals of the projects, the journey has been amazing and I hope it will be the same or much more exciting in the future 💯
Also, I have to thank [Nikhil Ladha](https://www.linkedin.com/in/nikhil-ladha/) as well as other members of the community for constantly guiding and mentoring me 🍻


I also make sure to attend at least 2 of the weekly calls to discuss about my contribution and also learn about other's contributions to Layer5 Projects.

We have weekly community meet regarding the mesheryctl, websites or discussing & welcoming newcomers to our community.

Come be a part of the warmest and most welcoming community at,
- Join Our Slack at [Layer5 Community](https://layer5io.slack.com/)
- Discover Our Projects at [Meshery](https://meshery.io)

After I made some major contributions and became a regular contributor. I was invited to the organization
![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/eechpbpaenyunaoaaxif.png)

Also, I got my very own profile as a community member, contributor at Layer5's site, https://layer5.io/community/members/adithya-krishna
![image](https://dev-to-uploads.s3.amazonaws.com/uploads/articles/hudl2gj5b41p5j6plrjh.png)

