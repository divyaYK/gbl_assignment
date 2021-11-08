import React from "react";

import { faFileMedical } from "@fortawesome/free-solid-svg-icons";
import { faEnvelopeOpen, faFileAlt } from "@fortawesome/free-regular-svg-icons";
import Thumbnail from "./Thumbnail";

function Thumbnails() {
  return (
    <div className="flex xs:flex-col md:flex-row md:flex-wrap items-center justify-around h-3/6 py-8 px-3 relative xs:top-12 md:top-1">
      <Thumbnail
        faIcon={faFileMedical}
        colorUsed={"green"}
        shadowColor={"rgba(34, 197, 94, 0.3)"}
        buttonText={"Case Upload"}
        funcDisable={false}
      />
      <Thumbnail
        faIcon={faFileAlt}
        colorUsed={"blue"}
        shadowColor={"rgba(59, 130, 246, 0.3)"}
        buttonText={"Generate Report"}
        funcDisable={true}
      />
      <Thumbnail
        faIcon={faEnvelopeOpen}
        colorUsed={"orange"}
        shadowColor={"rgba(249, 115, 22, 0.3)"}
        buttonText={"Broadcast Message"}
        funcDisable={true}
      />
    </div>
  );
}

export default Thumbnails;
