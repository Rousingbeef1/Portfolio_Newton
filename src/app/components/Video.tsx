'use client'
import ReactPlayer from "react-player";


export default function video(){
    return(
        <section className="bg-blue-500 my-0 hidden sm:block">
            <ReactPlayer  url={'/assets/videonewton.mp4'} loop={true} controls={false} muted={true} playing={true} width={"auto"} height={"screen"} config={{
            file: {
              attributes: {
                style: {
                  objectFit: 'cover',
                },
              },
            },
          }}/>
        </section>
    );
}