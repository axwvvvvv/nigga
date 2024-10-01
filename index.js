const nav = [
    {
      id: 1,
      link: "nigga 1 👦🏿",
    },
  
    {
      id: 2,
      link: "nigga 2 👦🏿",
    },
  
    {
      id: 3,
      link: "nigga 3 👦🏿",
    },
  
    {
      id: 4,
      link: "nigga 4 👦🏿",
    },
  ];
  
  let nMain = document.querySelector(".n-main");
  
  const htmlga = nav.map((student) => {
    let p = document.createElement("p");
    p.innerHTML = student.link;
    nMain.appendChild(p);
  
    nMain.style.display = "flex";
    nMain.style.alignItems = "center";
    nMain.style.justifyContent = "space-evenly";
    p.style.gap = "30px";
    nMain.style.background = "purple";
    nMain.style.width = "100%";
    nMain.style.height = "100px"
  
    p.onclick = function () {
      nMain.removeChild(p);
      alert(" treee bottan nigga👦🏿👦🏿👦🏿👦🏿");
    };
  });
  
  let headerEl = document.querySelector(".n-header");
  
  const header = [
    {
      id: 1,
      name: "bobur aka👦🏿",
      image:
        "https://oyina.uz/storage/generations/July2021/OFbu4cPdY9CzFI2IrZXp.jpg",
    },
    {
      id: 2,
      name: "bobur aka👦🏿",
      image:
        "https://oyina.uz/storage/generations/July2021/OFbu4cPdY9CzFI2IrZXp.jpg",
    },
    {
      id: 3,
      name: "bobur aka👦🏿",
      image:
        "https://oyina.uz/storage/generations/July2021/OFbu4cPdY9CzFI2IrZXp.jpg",
    },
  
    {
      id: 4,
      name: "bobur aka👦🏿",
      image:
        "https://oyina.uz/storage/generations/July2021/OFbu4cPdY9CzFI2IrZXp.jpg",
    },
  
    {
      id: 5,
      name: "bobur aka👦🏿",
      image:
        "https://oyina.uz/storage/generations/July2021/OFbu4cPdY9CzFI2IrZXp.jpg",
    },
    {
        id: 5,
        name: "bobur aka👦🏿",
        image:
          "https://oyina.uz/storage/generations/July2021/OFbu4cPdY9CzFI2IrZXp.jpg",
      },
      
  ];
  
  const htmlga1 = header.map((student) => {
    let h1 = document.createElement("h1");
    let img = document.createElement("img");
    h1.innerHTML = student.name;
    img.setAttribute("src", `${student.image}`);
    headerEl.appendChild(h1);
    headerEl.appendChild(img);
  
    headerEl.style.display = "flex";
    headerEl.style.flexWrap = "wrap";
    headerEl.style.gap = "40px";
    img.style.width = "250px";
  
    img.onclick = function () {
      headerEl.removeChild(img);
      alert("hayr bobur aka👦🏿👦🏿👦🏿");
    };
  
    h1.onclick = function () {
      headerEl.removeChild(h1);
      alert("syp kep uxla👦🏿👦🏿👦🏿");
    };
  
  });