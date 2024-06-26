import React, {useEffect, useRef} from 'react';
import Map from "ol/Map";
import View from "ol/View";
import TileLayer from "ol/layer/Tile";
import {OSM} from "ol/source";
import VectorSource from "ol/source/Vector";
import VectorLayer from "ol/layer/Vector";
import * as olProj from "ol/proj";
import "../App.css";

function Home() {
    const mapRef = useRef(false);

    const source = new VectorSource({wrapX: false});

    const vector = new VectorLayer({
        source: source,
    });

    useEffect(() => {

        olProj.useGeographic();
   
        const map = new Map({
            view: new View({
                center: [39.9392, 32.8962],
                zoom: 4,
                maxZoom: 6,
                minZoom: 1,
                rotation: 0.5
            }),
            layers: [
                new TileLayer({
                    source: new OSM({
                        crossOrigin: 'anonymous'
                    })
                }), vector
            ],
            target: mapRef.current,
            keyboardEventTarget: document
        });

        map.on('click', function (e) {
            const coordinates = e.coordinate;
            console.log(coordinates);
        });

        return () => map.setTarget(null);

    }, [vector]);

    return (
        <div>
            <div id="js-map" className="map" ref={mapRef}/>
        </div>
    );
}

export default Home;