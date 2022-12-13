# What is PWA?

I have been using PWA technology for a long time. I am sharing with you an article about my experiences with this technology, which is indispensable for the product owned by the team I work with.

Progressive Web Apps (PWA), according to its documentation, briefly;

> They are web applications built and enhanced with modern APIs to provide enhanced capabilities, reliability, and installability while reaching anyone, anywhere, on any device, with a single codebase.

In other words, for PWAs, we can say “Advanced Web Applications”. So, what are the characteristics that distinguish PWAs from conventional web applications, let’s discuss them;

## Adding to Home Screen (Installation)

It is the feature that I think is the most important privilege of PWAs. With this feature, users will not be able to distinguish your web application from native applications. With the necessary manifest settings, users will be able to install this application on their own devices. Native apps have few features that differ from PWAs. Apart from them, users will be able to use applications that offer the same experience.

## Multi-Platform
Unlike native applications, PWAs work independently of the operating system. In other words, you do not need to transcribe the web application you have created according to the device operating systems of the users. Because PWAs run in a browser on users’ devices. But these browsers do not make themselves noticed with customized settings and behave as if they are native applications.

## Update ability
Again, it is one of the most important features of PWAs. Unlike native applications, users will not have to wait for the application to be installed for the application update. Since PWAs are web applications, the application will start updating itself as soon as the user enters the PWA.

## Speed
Together with PWA, we meet a new term. Service Worker (I will explain this in my next article.) Together with Service Workers, we can cache all content and serve it from here. This action means that the files that need to be loaded from the server when your web application is opened are already loaded in your browser. Since these processes are bypassed, your site will be accelerated.

## Offline Work Opportunity
Service Workers will also be active in this section. As I just mentioned, with Service Workers, it is possible to store all the content of the web application in the browser’s cache. I said that this process has a positive effect on the opening speed of the web application. Likewise, when there is no internet, it is possible to take these cached files and show them to our users.

But in order for us to use this feature, the application content must be cached. That is, this feature will be active after the user’s second access to the application. Because on the first access, we need to cache the contents from the server.

## So, aren’t there any downsides to PWAs?
Of course, there is. Some of these;

- We cannot see PWAs in the application markets we are used to like App Store or Android Store. Because a PWA is a web application, not a native application.
- It cannot fully use all the features of the devices. For example, it does not have access to the phone book, it cannot work with the calendar application or has no access to NFC.
- It is still under development.

## What is PWA for me?
In short, I can say that the technology we call PWA is a developer-friendly, easy-to-maintain web technology that supports features such as multi-platform, offline use, and adding to the home screen. Considering all these features, I can say that PWA is an attractive technology for me.

Also, by using this technology;

- It will be enough for me to develop only one application for multimedia.
- As a Front End Developer, I can use my time more efficiently by using Front End technologies.
- I don’t have to do the criteria that the native app market imposes on me.
- I can maintain and repair my application from a single point.

I’m sure there are many benefits that I forgot.

Of course, your need for PWA technology will change depending on your use cases.

In this article, I gave you a head start on my experiences with PWA. In my future articles, I will talk about the depths of this technology and the different technologies used together.

Bests.

### References:

[https://web.dev/learn/pwa/](https://web.dev/learn/pwa/).
[https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps](https://developer.mozilla.org/en-US/docs/Web/Progressive_web_apps).
[https://www.freecodecamp.org/news/what-are-progressive-web-apps/](https://www.freecodecamp.org/news/what-are-progressive-web-apps/).






