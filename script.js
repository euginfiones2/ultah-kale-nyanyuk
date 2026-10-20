// GANTI NAMA DI SINI:
  const birthdayName = "Kale nyanyuk";
  document.querySelectorAll("[data-name]").forEach(el => el.textContent = birthdayName);

  let letterOpened = false;
  function openLetter() {
    if (letterOpened) return;
    letterOpened = true;
    document.getElementById("envelopeWrap").classList.add("open");
    document.getElementById("hint").textContent = "Suratnya terbuka! Semoga kamu suka 💌";
    document.getElementById("letterNext").disabled = false;
    confettiBurst(18);
  }
  function goTo(n) {
    document.querySelectorAll(".page").forEach(p => p.classList.remove("active"));
    document.getElementById("page" + n).classList.add("active");
    window.scrollTo({top: 0, behavior: "smooth"});
    if (n === 3) confettiBurst(10);
  }
  function showGiftModal() {
    document.getElementById("giftModal").classList.add("show");
  }
  function closeGiftModal() {
    document.getElementById("giftModal").classList.remove("show");
  }
  function confirmGift() {
    document.getElementById("modalTitle").textContent = "Pesanan dikonfirmasi! 🎉";
    document.getElementById("modalText").innerHTML = "Yeay, kado spesialmu sudah masuk daftar pengiriman!<br><strong>Kurir lucu kami sedang meluncur ke tempatmu 💗</strong>";
    document.getElementById("modalActions").innerHTML = '<button class="btn" onclick="finishGift()">Oke, kutunggu! ♡</button>';
    document.getElementById("giftHeading").textContent = "Your surprise is on the way! 🚚";
    document.getElementById("giftSubtitle").textContent = "Kadonya sudah dikonfirmasi! Kurir sedang membawa kejutan spesial untukmu. Semoga kamu suka yaa 💗";
    document.querySelector(".gift-stage").classList.add("confirmed");
    document.getElementById("deliveryScene").classList.add("show");
    document.getElementById("giftNote").style.display = "block";
    document.querySelector(".gift-stage p").textContent = "Status: kado sedang dalam perjalanan 🚚💗";
    confettiBurst(42);
  }
  function finishGift() {
    closeGiftModal();
    document.querySelector(".gift").style.animation = "none";
    document.querySelector(".gift-stage p").textContent = "Status: kado sedang dalam perjalanan 🚚💗";
  }
  function confettiBurst(count) {
    const symbols = ["💗", "✨", "🌸", "♡", "🎉", "⭐"];
    for (let i = 0; i < count; i++) {
      const piece = document.createElement("span");
      piece.className = "confetti";
      piece.textContent = symbols[Math.floor(Math.random() * symbols.length)];
      piece.style.left = Math.random() * 100 + "vw";
      piece.style.fontSize = (14 + Math.random() * 16) + "px";
      piece.style.animationDelay = (Math.random() * .7) + "s";
      document.body.appendChild(piece);
      setTimeout(() => piece.remove(), 4300);
    }
  }
  document.getElementById("giftModal").addEventListener("click", e => {
    if (e.target.id === "giftModal") closeGiftModal();
  });
