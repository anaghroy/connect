import { MoveLeft, MoveRight } from "lucide-react";
import artist from "../assets/images/services/artist.jpg";
import contentcreator from "../assets/images/services/contentcreator.jpg";
import graphicdesigner from "../assets/images/services/graphicdesigner.jpg";
import marketing from "../assets/images/services/marketing.jpg";
import Leftarrow from "./Leftarrow";

const Popular = () => {
  return (
    <section className="outer-popular">
      <div className="inner-content">
        <div className="para">
          <p>popular services</p>
          <span>
            Freelancingoffers a diverse range of popular services, from web
            development to content writing, catering to various clients needs.
          </span>
        </div>
        <div className="outer-button">
          <button className="btn-left">
            <MoveLeft size={20} />
          </button>
          <button className="btn-right">
            <MoveRight size={20} />
          </button>
        </div>
      </div>
      {/**Grid layout */}
      <div class="category-grid">
        <div class="card text">
          <p>3D Artist</p>
          <div className="wrap">
            <div className="btn">Environment Artist</div>
            <div className="btn">Architecture Artist</div>
            <div className="btn">Game Design</div>
            <div className="btn">Ai Artist</div>
          </div>
          <Leftarrow />
        </div>
        <div class="card image">
          <img src={artist} alt="artist" />
        </div>
        <div class="card text">
          <p>Video explainer</p>
          <div className="wrap">
            <div className="btn">Animated Explainer</div>
            <div className="btn">Ai Explainer</div>
            <div className="btn">live-action Explainer</div>
          </div>
          <Leftarrow />
        </div>
        <div class="card image">
          <img src={contentcreator} alt="contentcreator" />
        </div>

        <div class="card image">
          <img src={graphicdesigner} alt="graphicdesigner" />
        </div>
        <div class="card text">
          <p>Graphic Design</p>
          <div className="wrap">
            <div className="btn">Illustration</div>
            <div className="btn">Motion graphic design</div>
            <div className="btn">user interface design</div>
            <div className="btn">Print design</div>
            <div className="btn">Logo design</div>
          </div>
          <Leftarrow />
        </div>
        <div class="card image">
          <img src={marketing} alt="marketing" />
        </div>
        <div class="card text">
          <p>Digital marketing</p>
          <div className="wrap">
            <div className="btn">Adversting</div>
            <div className="btn">Email Marketing</div>
            <div className="btn">Search Engine Optimization</div>
            <div className="btn">Afflicate Marketing</div>
            <div className="btn">Content</div>
          </div>
          <Leftarrow />
        </div>
      </div>
    </section>
  );
};

export default Popular;
