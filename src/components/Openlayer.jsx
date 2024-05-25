import React, {useEffect, useRef} from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import VectorSource from 'ol/source/Vector';
import VectorLayer from 'ol/layer/Vector';
import {OSM} from "ol/source";
import * as olProj from "ol/proj";
import "../App.css";
import "ol/ol.css";

function Openlayer() {
    const vectorSource = new VectorSource();
    const vectorLayer = new VectorLayer();

    const mapRef = useRef(null);

    useEffect(() => {
        olProj.useGeographic();

        new Map({
            view: new View({
                center: [39.9392, 32.8962],
                zoom: 2
            }),
            layers: [
                new TileLayer({
                    source: new OSM({
                        crossOrigin: 'anonymous'
                    })
                })
            ],
            target: mapRef.current
        });
    }, []);

    return (
        <div id="js-map" className="map" ref={mapRef} />
    );
}

export default Openlayer;
