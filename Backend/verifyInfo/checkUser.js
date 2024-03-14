export function checkUser(user) {
    let allCorrect = true;
  
    // Expresiones regulares para validar los campos
    const passRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)[a-zA-Z\d]{8,}$/;
    const aliasRegex = /^[a-zA-Z0-9_-]{3,16}$/;
    const emailRegex = /^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/;
    const nameRegex = /^[a-zA-ZàáâäãåąčćęèéêëėįìíîïłńòóôöõøùúûüųūÿýżźñçčšžÀÁÂÄÃÅĄĆČĖĘÈÉÊËÌÍÎÏĮŁŃÒÓÔÖÕØÙÚÛÜŲŪŸÝŻŹÑßÇŒÆČŠŽ∂ð ,.'-]+$/u;
  
    if (!passRegex.test(user.password)) {
      allCorrect = false;
    }
  
    if (!aliasRegex.test(user.username)) {
      allCorrect = false;
    }
  
    if (!emailRegex.test(user.email)) {
      allCorrect = false;
    }
  
    if (!nameRegex.test(user.lastName)) {
      allCorrect = false;
    }
    if (!nameRegex.test(user.name)) {
      allCorrect = false;
    }
  
    return allCorrect;
  }

  export default checkUser;