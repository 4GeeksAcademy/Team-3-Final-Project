import React, { useEffect } from 'react';
import '../../styles/navbar2.css';

function NavBar2() {
  useEffect(() => {
    const navItems = document.querySelectorAll("nav ul li");

    navItems.forEach(navItem => {
      navItem.addEventListener("click", function() {
        const xcoord = this.getAttribute("data-xcoord");
        const navDiv = document.querySelector("nav div");

        navDiv.style.transition = "margin-left 500ms ease-in-out";
        navDiv.style.marginLeft = xcoord;

        this.classList.add("active");

        navItems.forEach(item => {
          if (item !== this) {
            item.classList.remove("active");
          }
        });
      });
    });
  }, []);

  return (
    <div>
      <div id="bg"></div>
      <section>
        <nav>
          
          <ul>
            <li data-xcoord="0px" className="active">Home</li>
            <li data-xcoord="400px">Search</li>
            <li data-xcoord="800px">Contact</li>
            <li data-xcoord="1200px">Store</li>
            <li data-xcoord="1600px">Store</li>
            <li data-xcoord="2000px">Store</li>
            <li data-xcoord="2000px">Profile</li>
          </ul>
        </nav>
      </section>
    </div>
  );
}

export default NavBar2;
