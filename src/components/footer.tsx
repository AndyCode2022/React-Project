"use client";
import React, { Component } from "react";
import Link from "next/link";

class Footer extends Component {
  render() {
    const current_year = new Date().getFullYear();
    return (
      <>
      <div id="section_footer">
        <div className="text-center py-4">
          <Link
            href="/"
            className="btn btn-link"
          >
            Home
          </Link>
          <span>|</span>
          <Link
            href="/about"
            className="btn btn-link"
          >
            About
          </Link>
          <span>|</span>
          <Link
            href="mailto:andrew.webster403@hotmail.co.uk"
            className="btn btn-link"
          >
            Contact
          </Link>
          <p>
            Copyright © {current_year}, Andrew Webster. All Rights Reserved.
          </p>
        </div>
      </div>
      </>
    );
  }
}

export default Footer;
