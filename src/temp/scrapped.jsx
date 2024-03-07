<ParallaxLayer>
<section className='selection-container'>
  {projects.map((project, index) => (
    <motion.div 
      className='project-option' 
      key={index + 1}
      variants={variants}
      custom={index}
      whileHover='hovering'
      whileTap='selected'
    >
      <motion.p 
        style={{transform: "scaleY(1.5)", fontSize: '18px'}}
      >✶</motion.p>
      <motion.p>0{index}</motion.p>
    </motion.div>
  ))}
</section>
</ParallaxLayer>

// const styles = {
//     .selection-container {
//         width: 85%;
//         border-radius: 5px;
//         background-color: rgba($color: #FFFFFF, $alpha: 0.8);
//         height: 40%;
//         display: flex;

//         .project-option {
//             background-color: black;
//             width: 25%;
//             border-radius: 40%;
//             display: flex;
//             flex-direction: column;
//             align-items: center;
//             justify-content: flex-end;

//             p {
//                 width: fit-content;
//                 font-family: great victorian;
//                 font-size: 50px;
//                 color: rgba($color: #FFFFFF, $alpha: 0.8);
//                 font-weight: bold;
//             }   
//         }
//     }
// }