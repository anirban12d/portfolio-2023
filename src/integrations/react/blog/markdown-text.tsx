/** @jsxImportSource react */
import { qwikify$ } from "@builder.io/qwik-react";
import { useEffect, useState } from "react";
import ReactMarkdown from "react-markdown";

const MarkdownText = (markdown: any) => {
  // const [content, setContent] = useState("");

  // useEffect(() => {
  //   fetch(markdown)
  //     .then((res) => res.text())
  //     .then((text) => setContent(text));
  // }, []);
  //
  console.log(markdown.value);
  const content =
    "In the vast landscape of web development, few technologies have reshaped the terrain as significantly as Node.js. Born out of the need for efficiency and scalability in web applications, Node.js has not only revolutionized backend development but has also influenced the entire JavaScript ecosystem. Let's embark on a journey through time to explore the fascinating history of Node.js, from its humble beginnings to its prominent position in modern software development.\n\n### The Genesis: Ryan Dahl's Brainchild\n\nNode.js was conceived by Ryan Dahl, a talented developer, in 2009. Frustrated by the limitations of traditional web servers and seeking a more efficient way to handle I/O operations, Dahl set out to create a runtime environment built on Chrome's V8 JavaScript engine. This endeavor led to the birth of Node.js, a lightweight and event-driven platform designed to enable asynchronous, non-blocking I/O operations.\n\n### Early Days and Adoption\n\nInitially released in 2009, Node.js garnered attention for its unique approach to handling concurrent connections and its seamless integration with JavaScript. Despite being in its infancy, Node.js quickly gained traction within the developer community, thanks to its performance advantages and the burgeoning popularity of JavaScript for both frontend and backend development.\n\nMajor companies such as LinkedIn and Walmart recognized the potential of Node.js early on and adopted it for their backend infrastructure. This early corporate endorsement helped solidify Node.js as a viable choice for building scalable and high-performance web applications.\n\n### The Rise to Prominence\n\nAs Node.js matured, its ecosystem flourished, propelled by a vibrant community of developers contributing libraries, frameworks, and tools. One of the most significant milestones in Node.js history was the introduction of npm (Node Package Manager) in 2010. npm revolutionized dependency management in JavaScript projects, making it effortless to discover, install, and manage reusable code modules.\n\nThe year 2014 marked another pivotal moment with the release of Node.js version 0.12, which introduced significant performance improvements and enhanced support for ECMAScript 6 (ES6) features. This release further cemented Node.js as a cutting-edge technology capable of powering enterprise-grade applications.\n\n### Continued Innovation and Growth\n\nSince its inception, Node.js has continued to evolve, with regular updates and improvements driven by both the Node.js Core Technical Committee and the broader community. The adoption of Node.js has expanded beyond traditional web applications, with its versatility showcased in areas such as microservices architecture, real-time communication, and serverless computing.\n\nThe advent of frameworks like Express.js, Nest.js, and [Socket.io](http://Socket.io) has further streamlined the development process, empowering developers to build robust and scalable applications with ease. Additionally, advancements in tooling, such as the introduction of async/await in Node.js 8, have simplified asynchronous programming, making code more readable and maintainable.\n\n### Looking Ahead: Node.js in the Future\n\nAs we look to the future, Node.js remains poised to play a pivotal role in shaping the landscape of web development. With ongoing efforts to improve performance, enhance security, and embrace modern JavaScript features, Node.js continues to evolve in response to the ever-changing demands of the industry.\n\nMoreover, the rise of technologies like Deno, a secure runtime for JavaScript and TypeScript built on V8, underscores the enduring influence of Node.js on the JavaScript ecosystem. While Deno presents an intriguing alternative, Node.js retains a vast and dedicated user base, ensuring its relevance for years to come.\n\nIn conclusion, the history of Node.js is a testament to the power of innovation and community collaboration in driving technological advancement. From its humble beginnings to its status as a cornerstone of modern web development, Node.js has transcended expectations, leaving an indelible mark on the digital landscape.\n\nAs we celebrate Node.js's journey thus far, we eagerly anticipate the next chapter in its evolution, confident that it will continue to inspire and empower developers around the globe.";

  return (
    <div className="prose prose-invert lg:prose-2xl">
      <ReactMarkdown children={markdown} />
    </div>
  );
};

export const MarkdownTextReact = qwikify$(MarkdownText);
