/* ----- Réglages de base ----- */
* {
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  font-family: "Poppins", sans-serif;
}

body {
  background: linear-gradient(to bottom, #000, #111);
  color: #d4af37;
  overflow-x: hidden;
}

/* ----- En-tête ----- */
header {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  background: rgba(0,0,0,0.85);
  backdrop-filter: blur(8px);
  text-align: center;
  padding: 12px 0;
  z-index: 1000;
}

header .logo {
  font-weight: bold;
  font-size: 1.3em;
  color: #d4af37;
  animation: glow 2s infinite alternate;
}

@keyframes glow {
  from { text-shadow: 0 0 5px #d4af37; }
  to { text-shadow: 0 0 20px #ffea00; }
}

nav ul {
  list-style: none;
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  margin-top: 8px;
}

nav ul li {
  margin: 5px 12px;
}

nav ul li a {
  color: #d4af37;
  text-decoration: none;
  transition: 0.3s;
}

nav ul li a:hover {
  color: #fff;
}

/* ----- Accueil ----- */
.hero {
  padding-top: 130px;
  text-align: center;
  padding: 130px 20px;
}

.hero h1 {
  font-size: 1.8em;
  margin-bottom: 12px;
}

.hero p {
  color: #fff;
  max-width: 600px;
  margin: 0 auto 20px auto;
  font-size: 1.1em;
}

.btns button {
  background: #d4af37;
  border: none;
  color: #000;
  font-weight: bold;
  padding: 10px 20px;
  margin: 5px;
  border-radius: 25px;
  cursor: pointer;
  transition: 0.3s;
}

.btns button:hover {
  background: #fff;
  color: #000;
}

/* ----- Informations ----- */
.infos {
  text-align: center;
  padding: 80px 20px;
}

.infos h2 {
  color: #d4af37;
  margin-bottom: 15px;
}

.infos ul {
  list-style: none;
  line-height: 1.8;
  font-size: 1.05em;
}

/* ----- Galerie ----- */
.gallery {
  text-align: center;
  padding: 80px 20px;
}

.gallery h2 {
  color: #d4af37;
  margin-bottom: 25px;
}

.image-gallery {
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  gap: 15px;
}

.image-gallery img {
  width: 300px;
  border-radius: 10px;
  transition: transform 0.5s ease, box-shadow 0.5s ease;
  cursor: pointer;
}

.image-gallery img:hover {
  transform: scale(1.05) rotate(1deg);
  box-shadow: 0 0 15px #d4af37;
}

/* ----- Contact ----- */
.contact {
  text-align: center;
  padding: 80px 20px;
}

.contact a {
  color: #d4af37;
  text-decoration: none;
  font-weight: bold;
}

.contact a:hover {
  color: #fff;
}

/* ----- Pied de page ----- */
footer {
  text-align: center;
  padding: 20px;
  background: #000;
  border-top: 1px solid #222;
  color: #d4af37;
  font-size: 0.9em;
}
