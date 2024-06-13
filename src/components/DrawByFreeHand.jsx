import React, {useEffect, useRef, useState} from 'react';
import Map from 'ol/Map';
import View from 'ol/View';
import TileLayer from 'ol/layer/Tile';
import {OSM} from "ol/source";
import * as olProj from "ol/proj";
import {DragRotate, Draw} from "ol/interaction";
import VectorLayer from "ol/layer/Vector";
import VectorSource from "ol/source/Vector";
import {GeoJSON} from "ol/format";
import shortid from "shortid";
import {DrawType} from "../store/Enums";

function DrawByFreeHand() {
    const mapRef = useRef(null);
    const [selectedType, setSelectedType] = useState(DrawType.Polygon);
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
                /*rotation: 0.25*/
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

        const isAltKeyPressed = (event) => event.altKey;

        const dragRotateInteraction = new DragRotate({
            condition: isAltKeyPressed
        });
        map.addInteraction(dragRotateInteraction);

        const drawInteraction = new Draw({
            type: "MultiPolygon",
            freehand: true,
            source: source
        })
        map.addInteraction(drawInteraction);

        drawInteraction.on('drawend', function (e) {
            const feature = e.feature;
            const uniqueID = shortid.generate();

            const newFeature = feature.clone();
            newFeature.setId(uniqueID);
            newFeature.setProperties(feature.getProperties());

            let parser = new GeoJSON();
            let drawnFeatures = parser.writeFeatureObject(newFeature);
            console.log(drawnFeatures.geometry);
        });
        
        return () => map.setTarget(null);
    }, [vector]);
    
    return (
        <>
            {/*<select style={{ position: 'fixed', bottom: 0, left: 0, zIndex: 1000 }}
                    value={selectedType}
                    onChange={()=> setSelectedType(e.target.value)}>
                {Object.keys(DrawType).map((key) => (
                    <option key={key} value={DrawType[key]}>
                        {DrawType[key]}
                    </option>
                ))}
            </select>*/}
            <div id="js-map" className="map" ref={mapRef}/>
        </>
    );
}

export default DrawByFreeHand;
