import React from "react";
import { motion } from "framer-motion";
import Typewriter from "typewriter-effect";

function Hero() {
  // const item = {
  //   hidden: {
  //     opacity: 0,
  //     x: -50,
  //   },
  //   show: {
  //     opacity: 1,
  //     x: 0,
  //     transition: {
  //       duration: 0.8,
  //     },
  //   },
  // };

  // const variants = {
  //   hidden: {
  //     opacity: 0,
  //   },
  //   show: {
  //     opacity: 1,
  //     transition: {
  //       staggerChildren: 0.2,
  //     },
  //   },
  // };

  // return (
  //   <motion.div
  //     variants={variants}
  //     viewport={{ once: true }}
  //     whileInView="show"
  //     initial="hidden"
  //     className="w-full md:h-full md:mt-20 flex flex-col justify-center space-y-3 px-4 py-16 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8 lg:py-28"
  //   >
  //     <motion.div variants={item} className="text-4xl md:text-6xl font-medium">
  //       <Typewriter
  //         options={{
  //           strings: [
  //             "Welcome to",
  //             " स्वागत है",
  //             "خوش آمدید",
  //             "स्वागत आहे",
  //             "স্বাগত মানা",
  //             "ਸੁਆਗਤ ਹੈ",
  //           ],
  //           autoStart: true,
  //           loop: true,
  //         }}
  //       />
  //     </motion.div>

  //     <motion.div variants={item} className="md:text-9xl text-6xl font-semibold">
  //       <span className="text-red-600">G</span>
  //       <span className="text-blue-600">D</span>
  //       <span className="text-green-600">S</span>
  //       <span className="text-yellow-400">C</span> ABESIT
  //     </motion.div>

  //     <div className="space-y-2 select-none pt-2">
  //       <motion.div variants={item} className="text-gray-500 text-2xl">We believe in togetherness</motion.div>
  //       <div className="flex space-x-5">
  //         <motion.div variants={item} className="outline outline-yellow-400 text-yellow-400 px-5 rounded-3xl py-2">
  //           Learn
  //         </motion.div>

  //         <motion.div variants={item} className="outline outline-blue-400 text-blue-400 px-5 rounded-3xl py-2">
  //           Collaborate
  //         </motion.div>

  //         <motion.div variants={item} className="outline outline-emerald-400 text-emerald-400 px-5 rounded-3xl py-2">
  //           Grow
  //         </motion.div>
  //       </div>
  //     </div>

  //     <div className="flex justify-center mt-5 md:visible">

  //     </div>
  //   </motion.div>
  // );
  const svgVarients = {
    hidden: { y: -150 },
    visible: { y: 0, transition: { duration: 2.5 } },
  };

  const pathVarients = {
    hidden: { opacity: 0, pathLength: 0, fill: "#FFF" },
    visible: {
      opacity: 1,
      pathLength: 1,
      fill: "#242424",
      transition: {
        duration: 3,
        ease: "easeInOut",
        type: "tween",
        fill: { delay: 2, duration: 2, ease: "easeInOut" },
      },
    },
  };

  return (
    <div className="w-full md:h-full flex flex-col justify-center px-4 mx-auto sm:max-w-xl md:max-w-full lg:max-w-screen-xl md:px-24 lg:px-8">
      <section className="justify-center content-center">
        <div className="flex flex-col mx-auto px-4 py-40 md:py-30 lg:flex lg:items-center text-black dark:text-gray-100">
          {/* LOGO */}
          <motion.svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="-150 0 450 66"
            width="100%"
            height="100%"
            variants={svgVarients}
            initial="hidden"
            animate="visible"
            fill="#000000"
            strokeWidth="1"
            className="flex content-center justify-center h-20"
          >
            <motion.path
              variants={pathVarients}
              d="M29.3999 29.9L49.0999 18.5C53.6999 15.8 55.2999 9.89999 52.5999 5.29999C49.8999 0.699987 43.9999 -0.900013 39.3999 1.79999L5.3999 21.4L29.3999 29.9Z"
              fill="#EA4335"
            />
            <motion.path
              variants={pathVarients}
              d="M44.1999 59.1C47.4999 59.1 50.7999 57.4 52.5999 54.3C55.2999 49.7 53.6999 43.8 49.0999 41.1L15.0999 21.5C10.4999 18.8 4.59987 20.4 1.89987 25C-0.800129 29.6 0.799871 35.5 5.39987 38.2L39.3999 57.8C40.8999 58.7 42.5999 59.1 44.1999 59.1Z"
              fill="#4285F4"
            />
            <motion.path
              d="M78.0001 59.1C79.6001 59.1 81.3001 58.7 82.8001 57.8L116.8 38.2L93.1001 29.5L73.1001 41C68.5001 43.7 66.9001 49.6 69.6001 54.2C71.4001 57.4 74.7001 59.1 78.0001 59.1Z"
              fill="#FBBC04"
              variants={pathVarients}
            />
            <motion.path
              d="M112 39.5C115.3 39.5 118.6 37.8 120.4 34.7C123.1 30.1 121.5 24.2 116.9 21.5L82.9002 1.89999C78.3002 -0.800014 72.4002 0.800016 69.7002 5.40002C67.0002 10 68.6002 15.9 73.2002 18.6L107.2 38.2C108.7 39.1 110.4 39.5 112 39.5Z"
              fill="#34A853"
              variants={pathVarients}
            />
          </motion.svg>
          {/* text */}
          <motion.svg
            className="h-24"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="90 0 1020 68"
            variants={svgVarients}
            initial="hidden"
            animate="visible"
            fill="transparent"
            strokeWidth="1"
            strokeLinecap="round"
            strokeLinejoin="round"
            stroke="#242424"
          >
            <motion.path
              d="M160.2 49.2C156.7 47.2 153.9 44.4 151.9 40.9C149.9 37.4 148.9 33.5 148.9 29.2C148.9 24.9 149.9 21.1 151.9 17.5C153.9 14 156.7 11.2 160.2 9.20001C163.7 7.20001 167.5 6.20001 171.6 6.20001C174.8 6.20001 177.9 6.80002 180.7 7.90002C183.5 9.00002 185.9 10.7 187.7 12.7L184 16.4C182.6 14.7 180.8 13.4 178.6 12.4C176.4 11.5 174.1 11 171.6 11C168.5 11 165.7 11.7 163 13.2C160.3 14.7 158.2 16.8 156.6 19.5C155 22.2 154.2 25.4 154.2 28.9C154.2 32.5 155 35.6 156.6 38.3C158.2 41 160.4 43.1 163 44.6C165.7 46.1 168.6 46.8 171.6 46.8C174.5 46.8 177 46.3 179 45.4C181 44.5 182.7 43.3 184.2 41.7C185.3 40.6 186.1 39.2 186.8 37.5C187.5 35.9 187.8 34.1 188 32.2H171.8V27.4H192.9C193.1 28.5 193.2 29.6 193.2 30.6C193.2 33.3 192.8 35.9 191.9 38.5C191 41.1 189.7 43.3 187.8 45.2C183.7 49.6 178.3 51.8 171.7 51.8C167.5 52.2 163.7 51.2 160.2 49.2Z"
              variants={pathVarients}
            />
            <motion.path
              d="M204.6 50.1C202.2 48.7 200.4 46.7 199 44.3C197.7 41.8 197 39.1 197 36C197 33 197.7 30.2 199 27.7C200.3 25.2 202.2 23.3 204.6 21.9C207 20.5 209.7 19.8 212.6 19.8C215.6 19.8 218.3 20.5 220.7 21.9C223.1 23.3 225 25.3 226.3 27.7C227.6 30.2 228.3 32.9 228.3 36C228.3 39 227.6 41.8 226.3 44.3C225 46.8 223.1 48.7 220.7 50.1C218.3 51.5 215.6 52.2 212.6 52.2C209.7 52.2 207 51.5 204.6 50.1ZM217.8 46.1C219.4 45.2 220.7 43.8 221.6 42.1C222.6 40.4 223 38.3 223 36.1C223 33.8 222.5 31.8 221.6 30.1C220.6 28.4 219.4 27 217.8 26.1C216.2 25.2 214.5 24.7 212.6 24.7C210.8 24.7 209.1 25.2 207.5 26.1C205.9 27 204.6 28.4 203.7 30.1C202.7 31.8 202.3 33.9 202.3 36.1C202.3 38.4 202.8 40.4 203.7 42.1C204.7 43.8 205.9 45.2 207.5 46.1C209.1 47 210.8 47.5 212.6 47.5C214.5 47.5 216.2 47 217.8 46.1Z"
              variants={pathVarients}
            />
            <motion.path
              d="M239.4 50.1C237 48.7 235.2 46.7 233.8 44.3C232.5 41.8 231.8 39.1 231.8 36C231.8 33 232.5 30.2 233.8 27.7C235.1 25.2 237 23.3 239.4 21.9C241.8 20.5 244.5 19.8 247.4 19.8C250.4 19.8 253.1 20.5 255.5 21.9C257.9 23.3 259.8 25.3 261.1 27.7C262.4 30.2 263.1 32.9 263.1 36C263.1 39 262.4 41.8 261.1 44.3C259.8 46.8 257.9 48.7 255.5 50.1C253.1 51.5 250.4 52.2 247.4 52.2C244.5 52.2 241.8 51.5 239.4 50.1ZM252.6 46.1C254.2 45.2 255.5 43.8 256.4 42.1C257.4 40.4 257.8 38.3 257.8 36.1C257.8 33.8 257.3 31.8 256.4 30.1C255.4 28.4 254.2 27 252.6 26.1C251 25.2 249.3 24.7 247.4 24.7C245.6 24.7 243.9 25.2 242.3 26.1C240.7 27 239.4 28.4 238.5 30.1C237.5 31.8 237.1 33.9 237.1 36.1C237.1 38.4 237.6 40.4 238.5 42.1C239.5 43.8 240.7 45.2 242.3 46.1C243.9 47 245.6 47.5 247.4 47.5C249.3 47.5 251 47 252.6 46.1Z"
              variants={pathVarients}
            />
            <motion.path
              d="M272.8 62.8C270.5 61 268.9 59 268.1 56.7L272.9 54.7C273.5 56.5 274.6 58 276.2 59.1C277.8 60.2 279.6 60.8 281.8 60.8C285 60.8 287.5 59.9 289.3 58C291 56.1 291.9 53.5 291.9 50.1V46.8H291.7C290.7 48.4 289.3 49.6 287.5 50.7C285.7 51.7 283.6 52.2 281.2 52.2C278.6 52.2 276.2 51.5 274 50.1C271.8 48.7 270 46.8 268.7 44.3C267.4 41.8 266.7 39.1 266.7 36C266.7 32.9 267.4 30.2 268.7 27.7C270 25.2 271.8 23.3 274 21.9C276.2 20.5 278.6 19.8 281.2 19.8C283.5 19.8 285.6 20.3 287.5 21.3C289.3 22.3 290.8 23.6 291.7 25.2H291.9V20.8H296.9V50C296.9 53.4 296.2 56.2 294.9 58.5C293.6 60.8 291.8 62.6 289.5 63.7C287.2 64.8 284.7 65.4 281.8 65.4C278.1 65.5 275.1 64.6 272.8 62.8ZM286.9 46.1C288.4 45.2 289.6 43.9 290.6 42.1C291.5 40.4 292 38.3 292 36C292 33.7 291.5 31.6 290.6 29.9C289.7 28.2 288.5 26.8 286.9 25.9C285.4 25 283.7 24.5 281.9 24.5C280.1 24.5 278.4 25 276.9 25.9C275.4 26.8 274.2 28.2 273.2 29.9C272.3 31.6 271.8 33.7 271.8 36C271.8 38.3 272.3 40.4 273.2 42.1C274.1 43.8 275.3 45.2 276.9 46.1C278.4 47 280.1 47.5 281.9 47.5C283.7 47.5 285.4 47 286.9 46.1Z"
              variants={pathVarients}
            />
            <motion.path
              d="M309.1 7.29999H303.9V51.2H309.1V7.29999Z"
              variants={pathVarients}
            />
            <motion.path
              d="M321.4 50.1C319.1 48.7 317.3 46.8 316 44.3C314.7 41.8 314 39.1 314 36C314 33.1 314.6 30.3 315.8 27.9C317 25.4 318.8 23.5 321 22C323.3 20.5 325.9 19.8 328.8 19.8C331.7 19.8 334.3 20.5 336.6 21.8C338.8 23.1 340.5 25 341.7 27.4C342.9 29.8 343.5 32.6 343.5 35.7C343.5 36.3 343.5 36.7 343.4 36.9H319.2C319.3 39.2 319.8 41.1 320.9 42.7C321.9 44.3 323.2 45.5 324.7 46.2C326.2 47 327.8 47.4 329.5 47.4C333.3 47.4 336.3 45.5 338.4 41.8L343 44C341.7 46.5 339.9 48.4 337.6 49.9C335.3 51.4 332.5 52.1 329.3 52.1C326.4 52.2 323.8 51.5 321.4 50.1ZM338.1 32.6C338 31.4 337.7 30.1 337.1 28.9C336.5 27.7 335.5 26.6 334.1 25.8C332.7 24.9 331 24.5 328.9 24.5C326.6 24.5 324.6 25.2 322.9 26.7C321.2 28.2 320.2 30.1 319.7 32.6H338.1Z"
              variants={pathVarients}
            />
            <motion.path
              variants={pathVarients}
              d="M363.6 7.29999H376.9C381.4 7.29999 385.3 8.19998 388.7 10.1C392.1 12 394.6 14.5 396.4 17.9C398.2 21.2 399.1 25 399.1 29.3C399.1 33.6 398.2 37.4 396.4 40.7C394.6 44 392 46.6 388.7 48.5C385.3 50.4 381.4 51.3 376.9 51.3H363.6V7.29999ZM376.9 46.3C382.1 46.3 386.2 44.8 389.2 41.8C392.2 38.8 393.7 34.6 393.7 29.3C393.7 23.9 392.2 19.8 389.2 16.8C386.2 13.8 382.1 12.3 376.9 12.3H368.8V46.3H376.9Z"
            />
            <motion.path
              variants={pathVarients}
              d="M410.9 50.1C408.6 48.7 406.8 46.8 405.5 44.3C404.2 41.8 403.5 39.1 403.5 36C403.5 33.1 404.1 30.3 405.3 27.9C406.5 25.4 408.3 23.5 410.5 22C412.8 20.5 415.4 19.8 418.3 19.8C421.2 19.8 423.8 20.5 426.1 21.8C428.3 23.1 430 25 431.2 27.4C432.4 29.8 433 32.6 433 35.7C433 36.3 433 36.7 432.9 36.9H408.7C408.8 39.2 409.3 41.1 410.4 42.7C411.4 44.3 412.7 45.5 414.2 46.2C415.7 47 417.3 47.4 419 47.4C422.8 47.4 425.8 45.5 427.9 41.8L432.5 44C431.2 46.5 429.4 48.4 427.1 49.9C424.8 51.4 422 52.1 418.8 52.1C415.8 52.2 413.2 51.5 410.9 50.1ZM427.6 32.6C427.5 31.4 427.2 30.1 426.6 28.9C426 27.7 425 26.6 423.6 25.8C422.2 24.9 420.5 24.5 418.4 24.5C416.1 24.5 414.1 25.2 412.4 26.7C410.7 28.2 409.7 30.1 409.2 32.6H427.6Z"
            />
            <motion.path
              variants={pathVarients}
              d="M434.3 20.8H440L449.3 45.1H449.4L458.9 20.8H464.4L451.9 51.2H446.6L434.3 20.8Z"
            />
            <motion.path
              variants={pathVarients}
              d="M473.9 50.1C471.6 48.7 469.8 46.8 468.5 44.3C467.2 41.8 466.5 39.1 466.5 36C466.5 33.1 467.1 30.3 468.3 27.9C469.5 25.4 471.3 23.5 473.5 22C475.8 20.5 478.4 19.8 481.3 19.8C484.2 19.8 486.8 20.5 489.1 21.8C491.3 23.1 493 25 494.2 27.4C495.4 29.8 496 32.6 496 35.7C496 36.3 496 36.7 495.9 36.9H471.7C471.8 39.2 472.3 41.1 473.4 42.7C474.4 44.3 475.7 45.5 477.2 46.2C478.7 47 480.3 47.4 482 47.4C485.8 47.4 488.8 45.5 490.9 41.8L495.5 44C494.2 46.5 492.4 48.4 490.1 49.9C487.8 51.4 485 52.1 481.8 52.1C478.9 52.2 476.2 51.5 473.9 50.1ZM490.6 32.6C490.5 31.4 490.2 30.1 489.6 28.9C489 27.7 488 26.6 486.6 25.8C485.2 24.9 483.5 24.5 481.4 24.5C479.1 24.5 477.1 25.2 475.4 26.7C473.7 28.2 472.7 30.1 472.2 32.6H490.6Z"
            />
            <motion.path
              d="M506.6 7.29999H501.4V51.2H506.6V7.29999Z"
              variants={pathVarients}
            />
            <motion.path
              d="M519.1 50.1C516.7 48.7 514.9 46.7 513.5 44.3C512.2 41.8 511.5 39.1 511.5 36C511.5 33 512.2 30.2 513.5 27.7C514.8 25.2 516.7 23.3 519.1 21.9C521.5 20.5 524.1 19.8 527.1 19.8C530.1 19.8 532.8 20.5 535.2 21.9C537.6 23.3 539.5 25.3 540.8 27.7C542.1 30.2 542.8 32.9 542.8 36C542.8 39 542.1 41.8 540.8 44.3C539.5 46.8 537.6 48.7 535.2 50.1C532.8 51.5 530.1 52.2 527.1 52.2C524.1 52.2 521.5 51.5 519.1 50.1ZM532.3 46.1C533.9 45.2 535.2 43.8 536.1 42.1C537.1 40.4 537.5 38.3 537.5 36.1C537.5 33.8 537 31.8 536.1 30.1C535.1 28.4 533.9 27 532.3 26.1C530.7 25.2 529 24.7 527.1 24.7C525.3 24.7 523.6 25.2 522 26.1C520.4 27 519.1 28.4 518.2 30.1C517.2 31.8 516.8 33.9 516.8 36.1C516.8 38.4 517.3 40.4 518.2 42.1C519.2 43.8 520.4 45.2 522 46.1C523.6 47 525.3 47.5 527.1 47.5C529 47.5 530.7 47 532.3 46.1Z"
              variants={pathVarients}
            />
            <motion.path
              d="M547.5 20.8H552.5V25.3H552.7C553.7 23.7 555.1 22.4 556.9 21.4C558.7 20.4 560.9 19.8 563.3 19.8C565.9 19.8 568.3 20.5 570.5 21.9C572.7 23.3 574.5 25.2 575.8 27.7C577.1 30.2 577.8 32.9 577.8 36C577.8 39.1 577.1 41.8 575.8 44.3C574.5 46.8 572.7 48.7 570.5 50.1C568.3 51.5 565.9 52.2 563.3 52.2C560.9 52.2 558.7 51.7 556.9 50.6C555 49.6 553.6 48.2 552.7 46.6H552.5L552.7 50.8V64.4H547.5V20.8ZM567.6 46.1C569.1 45.2 570.4 43.8 571.3 42.1C572.2 40.4 572.7 38.3 572.7 36.1C572.7 33.8 572.2 31.8 571.3 30.1C570.4 28.4 569.2 27 567.6 26.1C566.1 25.2 564.4 24.7 562.6 24.7C560.8 24.7 559.1 25.2 557.6 26.1C556.1 27 554.8 28.3 553.9 30.1C553 31.8 552.5 33.9 552.5 36.2C552.5 38.5 553 40.5 553.9 42.3C554.8 44.1 556 45.4 557.6 46.3C559.1 47.2 560.8 47.7 562.6 47.7C564.4 47.7 566 47 567.6 46.1Z"
              variants={pathVarients}
            />
            <motion.path
              variants={pathVarients}
              d="M590 50.1C587.7 48.7 585.9 46.8 584.6 44.3C583.3 41.8 582.6 39.1 582.6 36C582.6 33.1 583.2 30.3 584.4 27.9C585.6 25.4 587.4 23.5 589.6 22C591.9 20.5 594.5 19.8 597.4 19.8C600.3 19.8 602.9 20.5 605.2 21.8C607.4 23.1 609.1 25 610.3 27.4C611.5 29.8 612.1 32.6 612.1 35.7C612.1 36.3 612.1 36.7 612 36.9H587.8C587.9 39.2 588.4 41.1 589.5 42.7C590.5 44.3 591.8 45.5 593.3 46.2C594.8 47 596.4 47.4 598.1 47.4C601.9 47.4 604.9 45.5 607 41.8L611.6 44C610.3 46.5 608.5 48.4 606.2 49.9C603.9 51.4 601.1 52.1 597.9 52.1C595 52.2 592.3 51.5 590 50.1ZM606.7 32.6C606.6 31.4 606.3 30.1 605.7 28.9C605.1 27.7 604.1 26.6 602.7 25.8C601.3 24.9 599.6 24.5 597.5 24.5C595.2 24.5 593.2 25.2 591.6 26.7C589.9 28.2 588.9 30.1 588.4 32.6H606.7Z"
            />
            <motion.path
              variants={pathVarients}
              d="M617.5 20.8H622.5V25.8H622.7C623.3 24.1 624.4 22.7 626.2 21.6C628 20.5 629.8 19.9 631.5 19.9C632.8 19.9 634 20.1 635.1 20.5V26.1C634 25.5 632.6 25.2 630.8 25.2C629.4 25.2 628 25.6 626.8 26.5C625.6 27.3 624.6 28.5 623.8 29.9C623.1 31.3 622.7 32.8 622.7 34.5V51.5H617.5V20.8Z"
            />
            <motion.path
              variants={pathVarients}
              d="M657.9 50.8C655.8 49.9 654 48.5 652.4 46.8C650.8 45 649.7 42.9 649 40.3L654 38.3C654.7 40.9 656 43.1 657.9 44.7C659.8 46.4 662 47.2 664.5 47.2C667.1 47.2 669.2 46.5 671 45.1C672.8 43.7 673.6 41.9 673.6 39.5C673.6 37.5 672.9 35.8 671.4 34.4C669.9 33.1 667.5 31.8 664.1 30.7L661.3 29.7C658.2 28.6 655.7 27.1 653.7 25.3C651.7 23.5 650.8 21 650.8 17.8C650.8 15.7 651.4 13.8 652.5 12C653.6 10.2 655.2 8.80001 657.3 7.70001C659.3 6.60001 661.6 6.09998 664.1 6.09998C666.6 6.09998 668.9 6.6 670.8 7.5C672.7 8.4 674.2 9.60002 675.3 10.9C676.4 12.3 677.2 13.6 677.6 14.9L672.8 17C672.3 15.4 671.4 14.1 670 12.9C668.6 11.7 666.7 11.1 664.3 11.1C662.1 11.1 660.1 11.7 658.5 13C656.9 14.3 656.1 15.9 656.1 17.8C656.1 19.5 656.8 20.9 658.1 22C659.4 23.1 661.5 24.1 664.2 25L667 26C670.7 27.3 673.6 29 675.7 31.1C677.8 33.1 678.9 35.9 678.9 39.4C678.9 42.2 678.2 44.6 676.7 46.5C675.2 48.4 673.4 49.8 671.2 50.7C669 51.6 666.7 52.1 664.3 52.1C662.1 52.2 660 51.8 657.9 50.8Z"
            />
            <motion.path
              variants={pathVarients}
              d="M691.6 51.6C690.6 51.2 689.7 50.6 688.9 49.9C688.1 49.1 687.5 48.2 687.1 47.1C686.7 46 686.5 44.8 686.5 43.3V25.5H681.1V20.8H686.5V11.7H691.7V20.8H699.2V25.5H691.7V42.1C691.7 43.9 692 45.2 692.7 46C693.4 46.9 694.5 47.4 695.9 47.4C697.2 47.4 698.3 47.1 699.2 46.5V51.5C698.5 51.7 697.9 51.9 697.3 52C696.7 52.1 695.9 52.2 694.9 52.2C693.7 52.2 692.6 52 691.6 51.6Z"
            />
            <motion.path
              variants={pathVarients}
              d="M707.3 49C705.4 46.8 704.4 43.8 704.4 40V20.9H709.6V39.2C709.6 44.8 712.1 47.6 717.1 47.6C718.8 47.6 720.3 47.1 721.6 46.2C722.9 45.3 724 44 724.7 42.5C725.4 41 725.8 39.4 725.8 37.7V20.9H731V51.3H726.1V46.8H725.9C725 48.4 723.6 49.7 721.8 50.7C720 51.8 718 52.3 715.9 52.3C712.1 52.2 709.2 51.1 707.3 49Z"
            />
            <motion.path
              variants={pathVarients}
              d="M743.2 50.1C741 48.7 739.2 46.8 737.9 44.3C736.6 41.8 735.9 39.1 735.9 36C735.9 32.9 736.6 30.2 737.9 27.7C739.2 25.2 741 23.3 743.2 21.9C745.4 20.5 747.8 19.8 750.4 19.8C752.8 19.8 754.9 20.3 756.8 21.4C758.7 22.4 760.1 23.7 761 25.3H761.2L761 21.1V7.29999H766.2V51.2H761.3V46.7H761.1C760.2 48.3 758.7 49.6 756.9 50.7C755 51.7 752.9 52.3 750.5 52.3C747.8 52.2 745.4 51.5 743.2 50.1ZM756.2 46.1C757.7 45.2 759 43.8 759.9 42.1C760.8 40.3 761.3 38.3 761.3 36C761.3 33.7 760.8 31.6 759.9 29.9C759 28.2 757.8 26.8 756.2 25.9C754.7 25 753 24.5 751.2 24.5C749.4 24.5 747.7 25 746.2 25.9C744.7 26.8 743.4 28.2 742.5 29.9C741.6 31.6 741.1 33.7 741.1 35.9C741.1 38.2 741.6 40.2 742.5 41.9C743.4 43.6 744.6 45 746.2 45.9C747.7 46.8 749.4 47.3 751.2 47.3C753 47.5 754.7 47 756.2 46.1Z"
            />
            <motion.path
              variants={pathVarients}
              d="M778.6 50.1C776.3 48.7 774.5 46.8 773.2 44.3C771.9 41.8 771.2 39.1 771.2 36C771.2 33.1 771.8 30.3 773 27.9C774.2 25.4 776 23.5 778.2 22C780.5 20.5 783.1 19.8 786 19.8C788.9 19.8 791.5 20.5 793.8 21.8C796 23.1 797.7 25 798.9 27.4C800.1 29.8 800.7 32.6 800.7 35.7C800.7 36.3 800.7 36.7 800.6 36.9H776.4C776.5 39.2 777 41.1 778.1 42.7C779.1 44.3 780.4 45.5 781.9 46.2C783.4 47 785 47.4 786.7 47.4C790.5 47.4 793.5 45.5 795.6 41.8L800.2 44C798.9 46.5 797.1 48.4 794.8 49.9C792.5 51.4 789.7 52.1 786.5 52.1C783.6 52.2 780.9 51.5 778.6 50.1ZM795.3 32.6C795.2 31.4 794.9 30.1 794.3 28.9C793.7 27.7 792.7 26.6 791.3 25.8C789.9 24.9 788.2 24.5 786.1 24.5C783.8 24.5 781.8 25.2 780.2 26.7C778.5 28.2 777.5 30.1 777 32.6H795.3Z"
            />
            <motion.path
              variants={pathVarients}
              d="M806.1 20.8H811.1V25.3H811.3C812.2 23.7 813.5 22.4 815.4 21.4C817.2 20.3 819.2 19.8 821.3 19.8C825 19.8 827.9 20.9 829.8 23.1C831.7 25.3 832.7 28.2 832.7 32V51.3H827.5V32.8C827.5 27.3 824.9 24.6 819.8 24.6C818.2 24.6 816.7 25.1 815.4 26C814.1 26.9 813.1 28.2 812.4 29.7C811.7 31.2 811.3 32.8 811.3 34.5V51.3H806.1V20.8Z"
            />
            <motion.path
              variants={pathVarients}
              d="M846.2 51.6C845.2 51.2 844.3 50.6 843.5 49.9C842.7 49.1 842.1 48.2 841.7 47.1C841.3 46 841.1 44.8 841.1 43.3V25.5H835.7V20.8H841.1V11.7H846.3V20.8H853.8V25.5H846.3V42.1C846.3 43.9 846.6 45.2 847.3 46C848 46.9 849.1 47.4 850.5 47.4C851.8 47.4 852.9 47.1 853.8 46.5V51.5C853.1 51.7 852.5 51.9 851.9 52C851.3 52.1 850.5 52.2 849.5 52.2C848.4 52.2 847.3 52 846.2 51.6Z"
            />
            <motion.path
              variants={pathVarients}
              d="M881.7 49.2C878.2 47.2 875.5 44.4 873.5 40.9C871.5 37.4 870.5 33.5 870.5 29.2C870.5 24.9 871.5 21.1 873.5 17.5C875.5 14 878.2 11.2 881.7 9.20001C885.2 7.20001 889 6.20001 893.2 6.20001C896.5 6.20001 899.5 6.79998 902.3 8.09998C905 9.29998 907.4 11.1 909.3 13.4L905.6 17C904 15 902.1 13.5 900.1 12.6C898.1 11.7 895.8 11.2 893.2 11.2C890.1 11.2 887.1 11.9 884.5 13.4C881.8 14.9 879.7 17 878.1 19.7C876.5 22.4 875.7 25.6 875.7 29.1C875.7 32.7 876.5 35.8 878.1 38.5C879.7 41.2 881.8 43.3 884.5 44.8C887.2 46.3 890.1 47 893.2 47C898.6 47 903.1 44.8 906.8 40.4L910.5 44.1C908.5 46.5 906 48.4 903 49.8C900 51.2 896.7 51.9 893.1 51.9C889.1 52.2 885.2 51.2 881.7 49.2Z"
            />
            <motion.path
              variants={pathVarients}
              d="M920.9 7.29999H915.7V51.2H920.9V7.29999Z"
            />
            <motion.path
              variants={pathVarients}
              d="M930.6 49C928.7 46.8 927.7 43.8 927.7 40V20.9H932.9V39.2C932.9 44.8 935.4 47.6 940.4 47.6C942.1 47.6 943.6 47.1 944.9 46.2C946.2 45.3 947.3 44 948 42.5C948.7 41 949.1 39.4 949.1 37.7V20.9H954.3V51.3H949.4V46.8H949.2C948.3 48.4 946.9 49.7 945.1 50.7C943.3 51.8 941.3 52.3 939.2 52.3C935.4 52.2 932.6 51.1 930.6 49Z"
            />
            <motion.path
              variants={pathVarients}
              d="M970.7 50.7C968.8 49.7 967.4 48.3 966.5 46.7H966.3V51.2H961.3V7.29999H966.5V21.1L966.3 25.3H966.5C967.5 23.7 968.9 22.4 970.7 21.4C972.5 20.4 974.7 19.8 977.1 19.8C979.7 19.8 982.1 20.5 984.3 21.9C986.5 23.3 988.3 25.2 989.6 27.7C990.9 30.2 991.6 32.9 991.6 36C991.6 39.1 990.9 41.8 989.6 44.3C988.3 46.8 986.5 48.7 984.3 50.1C982.1 51.5 979.7 52.2 977.1 52.2C974.7 52.2 972.6 51.7 970.7 50.7ZM981.4 46.1C982.9 45.2 984.2 43.8 985.1 42.1C986 40.4 986.5 38.3 986.5 36.1C986.5 33.8 986 31.8 985.1 30.1C984.2 28.4 983 27 981.4 26.1C979.9 25.2 978.2 24.7 976.4 24.7C974.6 24.7 972.9 25.2 971.4 26.1C969.9 27 968.6 28.3 967.7 30.1C966.8 31.8 966.3 33.9 966.3 36.2C966.3 38.5 966.8 40.5 967.7 42.3C968.6 44.1 969.8 45.4 971.4 46.3C972.9 47.2 974.6 47.7 976.4 47.7C978.2 47.5 979.8 47 981.4 46.1Z"
            />
            <motion.path
              variants={pathVarients}
              d="M999.1 49.8C996.9 48.2 995.3 46.1 994.4 43.7L999 41.7C999.8 43.6 1001 45.1 1002.5 46.1C1004 47.1 1005.6 47.6 1007.4 47.6C1009.4 47.6 1011 47.2 1012.3 46.3C1013.6 45.4 1014.2 44.4 1014.2 43.2C1014.2 42 1013.7 41 1012.8 40.3C1011.8 39.5 1010.2 38.8 1007.9 38.3L1003.7 37.3C1001.4 36.8 999.5 35.8 997.8 34.4C996.2 33 995.4 31.2 995.4 28.9C995.4 27 995.9 25.4 997 24.1C998.1 22.7 999.5 21.7 1001.3 21C1003.1 20.3 1005.1 20 1007.2 20C1009.8 20 1012.2 20.6 1014.3 21.8C1016.4 23 1018 24.7 1018.9 26.9L1014.3 28.9C1013.6 27.4 1012.7 26.3 1011.3 25.6C1010 24.9 1008.5 24.6 1006.9 24.6C1005.3 24.6 1003.9 25 1002.6 25.8C1001.3 26.6 1000.7 27.6 1000.7 28.8C1000.7 29.9 1001.1 30.7 1002 31.3C1002.8 31.9 1004.2 32.5 1006 33L1010.5 34.1C1013.5 34.9 1015.8 36 1017.3 37.6C1018.8 39.1 1019.5 41 1019.5 43.1C1019.5 44.9 1019 46.5 1018 47.9C1017 49.3 1015.5 50.5 1013.7 51.3C1011.9 52.1 1009.8 52.5 1007.4 52.5C1004.1 52.2 1001.4 51.4 999.1 49.8Z"
            />
            {/* logo */}
          </motion.svg>
          <motion.h1
            initial={{ opacity: 0, y: 50 }}
            transition={{ duration: 1, delay: 1 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="text-black pt-4 text-center font-semibold uppercase text-sm   md:text-md tracking-[10px] md:tracking-[15px]"
          >
            ABES Institute Of Technology
          </motion.h1>
        </div>
      
      </section>
    </div>
  );
}

export default Hero;
