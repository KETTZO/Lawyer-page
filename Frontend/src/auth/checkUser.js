export function checkUser(user) {
    let allCorrect = true;
  
    // Expresiones regulares para validar los campos
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  
    if (!passRegex.test(user.password)) {
      allCorrect = false;
    }
  
    if (!emailRegex.test(user.email)) {
      allCorrect = false;
    }
  
    if (!nameRegex.test(user.name)) {
      allCorrect = false;
    }
    
    return allCorrect;
  }

  export default checkUser;