import {
  patronsdata,
  memberdata,
  moderatordata,
} from "../assets/data/dummydata";
import { Card } from "@/components/common/Card";
import { Title, TitleSm } from "@/components/common/Title";
import React from "react";
import Link from "next/link";


function patrons() {
return (
  <div className='container'>
      <div className="heading-title">
          <TitleSm title="MEET OUR PATRONS" /> <br />
          
        </div>
        <Link href="/">
          <div className="grid-4 py">
            {patronsdata.map((item) => (
              <Card data={item} key={item.id} caption={item.post} path="/team" />
            ))}
          </div>
        </Link>

        <div className="heading-title">
          <TitleSm title="World Class Speakers" /> <br />
         
        </div>
        <div className="grid-4 py">
          {memberdata.map((item) => (
            <Card data={item} key={item.id} caption={item.post} path="/team"/>
          ))}
        </div>

        <div className="heading-title">
          <TitleSm title="Our Exemplary Moderators" /> <br />
         
        </div>
        <div className="grid-4 py">
          {moderatordata.map((item) => (
            <Card data={item} key={item.id} caption={item.post} path="/team"/>
          ))}
        </div>
  </div>
)
}

export default patrons
