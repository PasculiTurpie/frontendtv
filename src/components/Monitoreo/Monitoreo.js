import React, { useEffect, useState } from 'react'
import './Monitoreo.css'
import HLSPlayer from "../HLSPlayer/HLSPlayer";

const Monitoreo = () => {
    const [urlData, setUrlData] = useState("");
    const [urlData2, setUrlData2] = useState("");
    const [urlData3, setUrlData3] = useState("");
    const [urlData4, setUrlData4] = useState("");
    const [urlData5, setUrlData5] = useState("");
    const [urlData6, setUrlData6] = useState("");
  
    const urlTV =
      "https://tv-cdn02.gtd.cl/bpk-token/1ab@lrk0s10akjlo105p512r1vufxfkusw2wltqltbaa";
  
    const hlsStreamUrl = `https://ireplay.tv/carsandroads/brands.m3u8`;
    const hlsStreamUrl2 = `${urlTV}/bpk-tv/TURBO/clear/index.m3u8`;
    const hlsStreamUrl3 = `${urlTV}/bpk-tv/MAX/clear/index.m3u8`;
    const hlsStreamUrl4 = `${urlTV}/bpk-tv/SYFY/clear/index.m3u8`;
    const hlsStreamUrl5 = `${urlTV}/bpk-tv/TRUTV/clear/index.m3u8`;
    const hlsStreamUrl6 = `${urlTV}/bpk-tv/UFRO/clear/index.m3u8`;
  
    useEffect(() => {
      setUrlData(hlsStreamUrl);
      setUrlData2(hlsStreamUrl2);
      setUrlData3(hlsStreamUrl3);
      setUrlData4(hlsStreamUrl4);
      setUrlData5(hlsStreamUrl5);
      setUrlData6(hlsStreamUrl6);
    }, [urlData, urlData2, urlData3, urlData4, urlData5, urlData6]);
    return (
      <>
        <div className="container-videos">
          <div className="container-video">
  
            <HLSPlayer src={hlsStreamUrl} width="400px" height="auto" />
          </div>
          {/* <div className="container-video">
  
            <HLSPlayer src={hlsStreamUrl2} width="400px" height="auto" />
          </div>
          <div className="container-video">
  
            <HLSPlayer src={hlsStreamUrl3} width="400px" height="auto" />
          </div>
          <div className="container-video">
  
            <HLSPlayer src={hlsStreamUrl4} width="400px" height="auto" />
          </div>
          <div className="container-video">
  
            <HLSPlayer src={hlsStreamUrl5} width="400px" height="auto" />
          </div>
          <div className="container-video">
  
            <HLSPlayer src={hlsStreamUrl6} width="400px" height="auto" />
          </div> */}
        </div>
      </>
    );
}

export default Monitoreo