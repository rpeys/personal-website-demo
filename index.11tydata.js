// The module.exports object at the bottom is the data that powers the index.njk
// template file. When you see {{name}}, for example, it refers to the name
// field of this object.
//
// This file is a JavaScript file that runs when the site is generated, which
// lets us flexibly prepare the data and simplifies the template.

// These are my frequent collaborators, so let's use some variables:
const me = "Rebecca Boiarsky";
const me_maiden_star = "Rebecca Peyser*";
const me_double = "Rebecca Peyser Boiarsky";
const david = "David Sontag";
const gaddy = "Gad Getz";

// authorList generates the HTML for the author list from a JS array
function authorList(authors) {
  var list = [];
  authors.forEach((name, i) => {
    if (name == me | name == me_double | name == me_maiden_star) {
      name = '<span class="self-author">' + name + "</span>";
    }
    if (i == authors.length - 1) {
      list.push("and " + name);
    } else {
      list.push(name);
    }
  });
  return list.join(", ");
}

module.exports = {
  name: "Rebecca Boiarsky (nee Peyser)",
  email: "rboiar [at] mit [dot] edu",
  publications: [
    {
      title: "Single Cell Characterization of Myeloma and its Precursor Conditions Reveals Transcriptional Signatures of Early Tumorigenesis",
      authors: authorList([
        me,
        "Nicholas J. Haradhvala",
        "Jean-Baptiste Alberge",
        "Romanos Sklavenitis-Pistofidis",
        "Tarek H. Mouhieddine",
        "Oksana Zavidij",
        "Ming-Chieh Shih",
        "Danielle Firer",
        "Mendy Miller",
        "Habib El-Khoury",
        "Shankara K. Anand",
        "François Aguet",
        david,
        "Irene M. Ghobrial",
        gaddy,
      ]),
      conference: "medRxiv, 2022",
    },
    {
      title: "Deep Contextual Clinical Prediction with Reverse Distillation",
      authors: authorList([
        "Rohan S Kodialam",
        me,
        "Justin Lim",
        "Neil Dixit",
        "Aditya Sai",
        david,
      ]),
      conference: "Proceedings of the AAAI Conference on Artificial Intelligence, 2021",
    },
    {
      title: "Defining the activated fibroblast population in lung fibrosis using single-cell sequencing",
      authors: authorList([
        me_maiden_star,
        "Scott MacDonnell*",
        "Yinglin Gao",
        "Luis Cheng",
        "Yong Kim",
        "Theodore Kaplan",
        "Qin Ruan",
        "Yi Wei",
        "Min Ni",
        "Christina Adler",
        "Wen Zhang",
        "Kishor Devalaraja-Narashimha",
        "Justin Grindley",
        "Gabor Halasz",
        "Lori Morton"
      ]),
      conference: "American journal of respiratory cell and molecular biology, 2019"
    },
  ],
};
