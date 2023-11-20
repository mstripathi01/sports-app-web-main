import { Box, Container, Typography } from "@mui/material";
import React from "react";
import styles from "@/styles/scroll.module.css";
const Scrollex = () => {
  return (
    <>
      <Container>
        <div className={`${styles.holster} ${styles.container}`}>
          <div
            className={`${styles.container} ${styles.mandatory_scroll_snapping} ${styles.y} ${styles.always_stop}`}
            dir="ltr"
          >
            <div>
              <video width="100%" controls={false} autoPlay={true} muted>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video width="100%" controls={false} autoPlay={true} muted>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video width="100%" controls={false} autoPlay={true} muted>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video width="100%" controls={false} autoPlay={true} muted>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
            <div>
              <video width="100%" controls={false} autoPlay={true} muted>
                <source src="/video.mp4" type="video/mp4" />
                Your browser does not support the video tag.
              </video>
            </div>
          </div>
        </div>
      </Container>
    </>
  );
};

export default Scrollex;
