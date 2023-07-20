import { component$, $, useContext } from '@builder.io/qwik';
import PhXLight from '~/Icons/Form/PhXLight';
import { ServiceModalVisibleContext } from '~/routes/layout';
import { ServiceModalContext } from '~/routes/layout';
import { ButtonSecond } from '../button/ButtonSecond';


interface ContentItem {
  id: number;
  title?: string;
  paragraph1: string;
  paragraph2: string;
  paragraph3: string;
  paragraph4: string;
  paragraph5: string;
  paragraph6: string;
  paragraph7: string;
  paragraph8: string;
  paragraph9: string;
  paragraph10: string;
}

const content: ContentItem[] = [
  {
    id: 1,
    title: "Website Optimization",
    paragraph1: "Unlock Your Website's Full Potential with Professional Website Reviews!",
    paragraph2: "Are you ready to take your website to new heights? As a freelance web developer, I offer you my expertise in providing professional website reviews that will supercharge your site's performance. Get ready to discover hidden opportunities and optimize your online presence for exceptional results.",
    paragraph3: "In today's competitive digital landscape, it's essential to stand out from the crowd. Your website is the face of your business, and making it truly shine is crucial for attracting visitors and converting them into loyal customers. That's where my professional website reviews come in.",
    paragraph4: "With my meticulous approach, I'll thoroughly analyze every aspect of your website. From the design and layout to the content and user experience, no stone will be left unturned. I'll provide you with an in-depth report that highlights both the strengths of your website and areas that can be improved.",
    paragraph5: "But it doesn't stop there. I won't just give you a list of issues and leave you hanging. I'll provide you with clear, actionable recommendations that are tailored specifically to your website. Whether it's enhancing the aesthetics, improving search engine optimization, or streamlining navigation, I'll guide you through the process of implementing these improvements effectively.",
    paragraph6: "My focus is on optimizing your website for conversions. I understand that your ultimate goal is to turn visitors into customers, and I'll help you achieve that. By fine-tuning your call-to-action buttons, improving the user journey, and enhancing the overall user experience, we'll create a website that not only looks great but also drives tangible results.",
    paragraph7: "Stay one step ahead of the competition with my professional website review service. I'll keep you informed about industry best practices and innovative strategies that will set your website apart from the rest. By implementing these cutting-edge techniques, you'll attract more visitors, engage them effectively, and boost your overall conversions.",
    paragraph8: "I'm not just here for a one-time review. I believe in building long-term relationships with my clients. I'll provide ongoing support, answering any questions you have and offering guidance throughout your website optimization journey. Your satisfaction and success are my top priorities.",
    paragraph9: "Don't settle for a mediocre website. Let my professional website review service unleash its true potential. With my expertise and dedication, we'll transform your website into a powerful online asset that drives outstanding results.",
    paragraph10: "Contact me today to take advantage of my professional website review service. Together, we'll propel your website to new heights and make it the digital powerhouse it deserves to be. Get ready to see your website thrive like never before!",

  },
  {
    id: 2,
    title: "User-Centric Design",
    paragraph1: "Ignite Your Online Presence with Engaging User-Centric Designs!",
    paragraph2: "In the dynamic realm of the online world, your website stands as the gateway to your brand's success. It's the digital face that greets your audience, and a captivating user experience holds the key to leaving a lasting impression. As a dedicated freelance web developer, I specialize in crafting user-centric designs that effortlessly engage your visitors and seamlessly guide them towards your desired actions.",
    paragraph3: "Your audience is at the core of my design approach. By truly understanding their needs, preferences, and behaviors, I create interfaces that resonate with them on a deeper level, fostering a connection that goes beyond aesthetics.",
    paragraph4: "I believe in captivating your visitors from the very first moment they land on your website. Through visually stunning aesthetics, captivating visuals, and compelling storytelling, I create an immersive experience that leaves a lasting impact.",
    paragraph5: "Confusion is the enemy of engagement. With clear and intuitive navigation structures, I ensure that your users effortlessly find what they're looking for, enhancing their satisfaction and encouraging further exploration.",
    paragraph6: "In an era dominated by mobile devices, a responsive design is not optional—it's imperative. Rest assured, your website will adapt flawlessly to any screen size, ensuring a consistent and delightful experience across all devices.",
    paragraph7: "Visual appeal is a powerful tool. By thoughtfully selecting color schemes, typography, and imagery, I craft a visually striking interface that authentically reflects your brand's identity and captivates your target audience.",
    paragraph8: " Every interaction should be a breeze. Through strategic placement of interactive elements, clear calls to action, and smooth transitions, I guide your visitors towards their intended actions with ease and satisfaction.",
    paragraph9: " I value your vision and insights. Collaborating closely with you, I'll understand your goals, preferences, and brand identity, tailoring the design to perfectly align with your unique business.",
    paragraph10: "Your online presence deserves to shine! As a dedicated freelance web developer, I'm committed to creating an extraordinary digital experience that leaves a lasting impact on your audience. Contact me today, and let's embark on a journey to unlock the full potential of your website, guiding your brand towards new heights of success. Together, we'll create a captivating virtual realm that sets you apart from the competition.",
  },
  {
    id: 3,
    title: "Goal-Oriented Strategy",
    paragraph1: "Elevate Your Business's Online Presence with a Tailored Strategy!",
    paragraph2: "No matter the size of your business, I am here to partner with you in developing a tailored strategy that will propel your online presence to new heights. As a dedicated freelance web developer, I specialize in crafting powerful strategies that align with your unique goals and drive conversions, helping you make a significant impact in the digital landscape.",
    paragraph3: "I understand that every business is distinct, with its own set of objectives. That's why I work closely with you to develop a customized strategy that caters specifically to your needs, ensuring maximum effectiveness and success.",
    paragraph4: "Your success is my priority. By comprehensively understanding your objectives, whether it's increasing brand awareness, driving sales, or expanding your customer base, I create a strategic roadmap that leads you directly to your desired outcomes.",
    paragraph5: " Conversions are the lifeblood of your business. I utilize my expertise to implement conversion-focused strategies that maximize your website's potential. From optimizing user flows to enhancing calls to action, I'll help you turn visitors into loyal customers.",
    paragraph6: "To develop the most effective strategy, I conduct a thorough analysis of your target market, competitors, and industry trends. This invaluable insight allows me to identify untapped opportunities and position your business for success.",
    paragraph7: "Your online presence should seamlessly align with your overall brand identity. I ensure that the strategy we develop integrates harmoniously with your existing marketing efforts, delivering a cohesive and impactful customer experience.",
    paragraph8: "Putting your customers at the forefront is key. By understanding their needs, preferences, and behaviors, I create user-centric strategies that engage and resonate with your target audience, forging long-lasting connections.",
    paragraph9: "I believe in constant improvement. I continuously monitor and analyze the performance of your strategy, making data-driven adjustments along the way. This iterative process ensures that your online presence remains agile, adaptive, and effective.",
    paragraph10: "Let's transform your online presence into a powerful force. Contact me today, and let's embark on a journey towards an exceptional digital strategy that elevates your business, drives conversions, and positions you as a leader in your industry. Together, we'll pave the way for your remarkable online success.",
  },
  {
    id: 4,
    title: "Personalized Solutions",
    paragraph1: "Unlock Your Business's Potential with Customized Web Development Solutions!",
    paragraph2: "No two businesses are the same, and that's why you deserve a web development solution that caters specifically to your unique needs. As a dedicated freelance web developer, I offer customized web development solutions designed to help you achieve your goals with precision and excellence. With a sharp focus on the latest technologies and industry best practices, I'll create a tailored solution that sets your business apart from the competition.",
    paragraph3: "I begin by gaining a deep understanding of your business, its objectives, and its target audience. By comprehending your unique needs, I can create a web development solution that perfectly aligns with your goals and vision.",
    paragraph4: "Your business deserves a website that reflects its uniqueness. I'll collaborate closely with you to develop a customized web development solution that encapsulates your brand identity, values, and objectives. Every aspect will be meticulously crafted to ensure a seamless and captivating user experience.",
    paragraph5: "To stay ahead of the curve, I leverage the power of cutting-edge technologies. From robust content management systems to interactive features and responsive designs, I'll incorporate the latest tools and technologies that propel your website to new heights.",
    paragraph6: "Your business is dynamic, and your website should be able to keep pace. I'll create a flexible and scalable solution that can adapt to your evolving needs, allowing for future expansion and integration of new features or functionalities.",
    paragraph7: "I value open communication and collaboration. Throughout the entire process, I'll keep you involved, providing regular updates, seeking feedback, and incorporating your insights. Together, we'll create a web development solution that exceeds your expectations.",
    paragraph8: "No website is immune to errors or bugs. I conduct thorough testing to detect any issues, including broken links, display inconsistencies, or functional errors, ensuring your website delivers a seamless experience toTime is of the essence, and I understand the importance of meeting deadlines. I'll work diligently to deliver your customized web development solution within the agreed-upon time-frame, ensuring a seamless transition from concept to reality.",
    paragraph9: "My dedication doesn't end with the launch of your website. I provide ongoing support, ensuring that your web development solution remains up-to-date, secure, and optimized. I'm here to address any concerns, provide updates, and assist you in maximizing the value of your website.",
    paragraph10: "Unleash the full potential of your business with a customized web development solution. Contact me today, and let's embark on a transformative journey to create a website that truly represents your brand, engages your audience, and helps you achieve your goals with remarkable success. Get ready to make your online presence shine like never before!",
  },
  {
    id: 5,
    title: "Stringent Quality Testing",
    paragraph1: "Achieve Website Excellence with Meticulous Testing Services!",
    paragraph2: "Creating a successful website involves more than just impressive design and seamless functionality. To truly stand out in the digital landscape, your website needs to excel in every aspect. As a dedicated freelance web developer, I offer meticulous testing services to ensure that your website delivers outstanding performance, flawless design, and optimal functionality across all devices.",
    paragraph3: "I leave no stone unturned in evaluating your website. From design elements to functionality and performance, I conduct thorough tests to identify any issues or areas for improvement.",
    paragraph4: " Aesthetics play a crucial role in engaging your audience. I meticulously examine every design aspect of your website, ensuring that it not only looks visually stunning but also aligns with your brand identity and captivates your visitors.",
    paragraph5: "A website should function flawlessly to provide an exceptional user experience. I rigorously test all interactive features, forms, navigation, and user flows, ensuring they work seamlessly and intuitively.",
    paragraph6: "In today's multi-device world, your website must perform optimally on various screen sizes and devices. I conduct extensive testing across different platforms, browsers, and devices to guarantee a consistent and satisfying user experience for all visitors.",
    paragraph7: "Slow-loading websites can deter users and harm your search engine rankings. I assess your website's performance, identifying potential bottlenecks and optimizing its speed to provide a swift and seamless browsing experience.",
    paragraph8: "No website is immune to errors or bugs. I conduct thorough testing to detect any issues, including broken links, display inconsistencies, or functional errors, ensuring your website delivers a seamless experience to your users.",
    paragraph9: "My commitment to your website's success doesn't end with testing. I provide ongoing support, addressing any concerns, questions, or issues that may arise after the launch, ensuring your website maintains its excellence.",
    paragraph10: "Don't settle for mediocrity. Let my expertise as a freelance web developer elevate your website's performance through meticulous testing. Contact me today to ensure your website excels in design, functionality, and performance on all devices, unlocking its true potential in the digital landscape.",
  },
  {
    id: 6,
    title: "Continuous Support",
    paragraph1: "Maximize Your Website's Potential with Comprehensive Support Services!",
    paragraph2: "Running a successful business requires your undivided attention. That's where I come in as a dedicated freelance web developer, offering a range of website support services that take the burden off your shoulders. From routine maintenance to continuous optimization, I ensure that your website performs at its absolute best while you focus on what you do best—growing your business.",
    paragraph3: "Keeping your website up and running smoothly is my priority. I handle regular maintenance tasks such as updates, backups, and security checks, ensuring that your website remains secure, stable, and free from technical glitches.",
    paragraph4: "Your website's speed and performance can make or break user experience. I continuously monitor and optimize your website's performance, fine-tuning elements that may impact loading times, responsiveness, and overall efficiency.",
    paragraph5: "Your website should always reflect the latest information about your business. Whether it's adding new products, updating services, or publishing blog posts, I handle content updates promptly, ensuring that your website remains fresh and relevant.",
    paragraph6: "Technical issues can arise unexpectedly. I promptly address any bugs, glitches, or errors that may occur, providing efficient troubleshooting and resolving issues to minimize downtime and maximize user satisfaction.",
    paragraph7: "Protecting your website and user data is paramount. I implement robust security measures, including regular vulnerability assessments, SSL certificate installation, and malware scanning, to safeguard your website from potential threats.",
    paragraph8: "Data-driven insights are crucial for making informed decisions. I provide comprehensive analytics and reporting, giving you valuable information on website performance, user behavior, and key metrics to help you measure success and identify areas for improvement.",
    paragraph9: "With my website support services, you can have peace of mind knowing that your website is in capable hands. I handle the technical aspects, allowing you to focus on your core business activities, while I ensure your website consistently delivers optimal performance.",
    paragraph10: "Don't let website maintenance and optimization distract you from your business goals. Let me take care of your website with comprehensive support services. Contact me today to free up your time and maximize your website's potential, ensuring it remains a powerful tool in driving your business forward.",
  },
  {
    id: 7,
    title: "SEO-Strategy",
    paragraph1: "Skyrocket Your Website's Visibility and Conversions with Expert SEO Services!",
    paragraph2: "Is your website struggling to attract the traffic and leads it deserves? Fear not! As a dedicated freelance web developer, I offer a range of specialized SEO services designed to catapult your website to the top of search engine rankings. With a sharp focus on keyword research and on-page optimization, I'll supercharge your online presence on platforms like Google and unlock the full potential of your business.",
    paragraph3: "Unleash the power of targeted keywords! I'll conduct thorough research to identify the most relevant and high-performing keywords in your industry. By strategically incorporating these keywords into your website's content, we'll attract qualified traffic that is actively searching for what you offer.",
    paragraph4: "Your website's structure and content play a vital role in search engine rankings. Through meticulous on-page optimization techniques, I'll fine-tune your website's elements, such as meta tags, headings, and URLs, ensuring they align perfectly with search engine algorithms and elevate your ranking potential.",
    paragraph5: "Engaging and informative content is the backbone of successful SEO. I'll analyze your existing content and provide expert recommendations to enhance its quality, relevance, and optimization. Whether it's crafting compelling blog posts or optimizing landing page copy, I'll help you create content that resonates with your target audience and boosts your search engine visibility.",
    paragraph6: "Stay informed about your SEO progress. I'll provide you with regular reports that highlight key metrics, keyword performance, and the impact of our optimization efforts. These comprehensive reports will give you a clear understanding of the results and ROI generated by our SEO strategy.",
    paragraph7: "To outrank your competitors, you need to understand their strategies. I'll conduct comprehensive competitor analysis, dissecting their SEO tactics and identifying areas of opportunity. With this valuable insight, we'll develop a winning SEO strategy that sets you apart from the crowd.",
    paragraph8: "Behind-the-scenes optimizations can make a significant impact on your website's visibility. I'll delve into technical SEO aspects, including website speed, mobile-friendliness, and URL structure, ensuring that your website meets the stringent requirements of search engines, resulting in improved rankings and user experience.",
    paragraph9: "If you have a physical business presence, targeting local customers is essential. I'll optimize your website for local searches, leveraging location-based keywords and directory listings to help you dominate the local search results and attract customers in your vicinity.",
    paragraph10: "Don't let your website get lost in the digital abyss. Contact me today, and let's embark on an exhilarating journey to boost your website's traffic, increase your leads, and achieve online domination through expert SEO strategies. Get ready to witness your business thrive like never before!",
  },
  {
    id: 8,
    title: "Collaborative approach",
    paragraph1: "Collaborate and Bring Your Vision to Life with a Stunning Website!",
    paragraph2: "Your vision deserves to be brought to life in a way that truly represents your brand and captivates your audience. As a versatile freelance web developer, I offer the flexibility to work seamlessly with other teams and designers to create something truly remarkable. Let's join forces and embark on an exciting journey to turn your vision into a stunning website that leaves a lasting impression.",
    paragraph3: "I understand the value of teamwork. By collaborating closely with other teams and designers, we can combine our expertise and creative energies to achieve extraordinary results. Together, we'll create a website that exceeds your expectations.",
    paragraph4: "Your vision is the driving force behind your website. I am here to listen and understand your goals, preferences, and brand identity. By incorporating your vision into the design and development process, we'll create a website that authentically represents your unique essence.",
    paragraph5: "Harmonizing various creative inputs is crucial. I'll work seamlessly with other teams and designers, ensuring that their contributions blend harmoniously into the overall website design. The result will be a cohesive and visually stunning masterpiece.",
    paragraph6: "Your website should be a true reflection of your brand. I'll carefully align the design elements, color schemes, typography, and imagery to embody your brand's personality and values, creating a cohesive brand experience that resonates with your target audience.",
    paragraph7: "User engagement is paramount. I'll collaborate with designers to craft intuitive user interfaces, captivating visuals, and seamless interactions that guide your visitors towards their desired actions. Together, we'll create a user experience that keeps them coming back for more.",
    paragraph8: "Collaboration thrives on continuous improvement. We'll iterate and refine the website throughout the development process, incorporating feedback, making adjustments, and striving for excellence at every stage. Together, we'll create something great that evolves with your vision.",
    paragraph9: "Effective communication is the key to successful collaboration. I'll maintain clear and open lines of communication, keeping you informed and involved throughout the entire process. Your feedback and insights are highly valued.",
    paragraph10: "Together, we'll bring your vision to life and create a stunning website that showcases your brand and engages your audience. Contact me today, and let's embark on this collaborative journey towards online greatness. Get ready to unveil a website that leaves a lasting impact and propels your business towards remarkable success.",
  },


]

export default component$(() => {

  const serviceModalVisible = useContext(ServiceModalVisibleContext);
  const currentContent = useContext(ServiceModalContext)

    

    const  closeHandler =  $(() => {
        serviceModalVisible.value = false
    })

  return (
    <>
    {serviceModalVisible.value && (<div class="fixed top-0 z-50 flex min-h-screen min-w-full max-h-screen overflow-y-auto overscroll-y-auto items-center justify-center  bg-modal" onClick$={closeHandler}>
        <div class="relative mr-4 ml-4 mb-4 mt-4 bg-white min-h-80% overflow-y-auto max-h-420 max-w-90% rounded-3xl px-32 py-32 md:ml-16 md:mr-16 lg:min-w-384 lg:max-w-70% lg:px-48 lg:py-48">
        <button
              class="absolute right-10 top-0 p-16"
              onClick$={closeHandler}
            >
              <PhXLight />
            </button>
            <div class="flex flex-col gap-32 md:gap-32">
            <h6 class="text-28 text-textColor text-center md:text-36 lg:text-36 xl:text-47">{content[currentContent.value].title}</h6>
            <p class="max-w-prose text-16 font-medium md:text-19 md:text-center lg:text-21">{content[currentContent.value].paragraph1}</p>
            <p class="max-w-prose text-16">{content[currentContent.value].paragraph2}</p>
            <p class="max-w-prose text-16">{content[currentContent.value].paragraph3}</p>
            <p class="max-w-prose text-16">{content[currentContent.value].paragraph4}</p>
            <p class="max-w-prose text-16">{content[currentContent.value].paragraph5}</p>
            <p class="max-w-prose text-16">{content[currentContent.value].paragraph6}</p>
            <p class="max-w-prose text-16">{content[currentContent.value].paragraph7}</p>
            <p class="max-w-prose text-16">{content[currentContent.value].paragraph8}</p>
            <p class="max-w-prose text-16">{content[currentContent.value].paragraph9}</p>
            <p class="max-w-prose text-16">{content[currentContent.value].paragraph10}</p>
            <ButtonSecond>Let's get started</ButtonSecond>
            </div>
            

        </div>

    </div>)}
    
    </>
  )
});