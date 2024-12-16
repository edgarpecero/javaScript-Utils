const h1 = (strings: TemplateStringsArray, ...values: any) => {
  let body = '';
  for (let i = 0; i < strings.length; i++) {
    body += strings[i] + (values[i] || "");
  }
  return (`<h1> ${body} </h1>`)
};

const firstName = 'Edgar';
const place = 'World';

const template = h1`Hello ${place} my name is ${firstName}`;
console.log(template);