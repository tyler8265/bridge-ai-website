import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import './BridgeDetailsTemplate.css';
import exit from './x-symbol.svg';
import { Link } from 'react-router-dom';
import { Line } from 'react-chartjs-2';

const BridgeDetailsTemplate = ({ bridgeData }) => {
    const { bridgeId } = useParams();
    const [showTable, setShowTable] = useState(false);
    const [showDropdown, setShowDropdown] = useState(false); // New state to control dropdown visibility
    const [showCustomContents, setShowCustomContents] = useState({
        customContent1: false,
        customContent2: false,
        customContent3: false,
        customContent4: false,
        customContent5: false,
        customContent6: false,
        customContent7: false,
    });

    const handleButtonClick = () => {
        setShowTable(true);
        // Hide all custom content when Bridge Tabular Features button is clicked
        setShowCustomContents({
            customContent1: false,
            customContent2: false,
            customContent3: false,
            customContent4: false,
            customContent5: false,
            customContent6: false,
            customContent7: false,
        });
        setShowDropdown(false); // Also hide the dropdown
    };

    const handleSequentialButtonClick = () => {
        setShowTable(false);
        setShowDropdown(true);
    };

    const handlePredictionButtonClick = () => {
        setShowTable(false);
        setShowDropdown(false);
        // Hide all custom content when Bridge AI Prediction button is clicked
        setShowCustomContents({
            customContent1: false,
            customContent2: false,
            customContent3: false,
            customContent4: false,
            customContent5: false,
            customContent6: false,
            customContent7: false,
        });
    };


    const handleDropdownButtonClick = (contentKey) => {
        setShowCustomContents((prev) => {
            // Hide the previous custom content
            const updatedContents = Object.fromEntries(
                Object.entries(prev).map(([key, value]) => [key, false])
            );
            // Show the corresponding custom content
            updatedContents[contentKey] = true;
            return updatedContents;
        });
        setShowDropdown(false); // Hide dropdown after clicking a button
    };


    const closeMenu = (e) => {
        e.preventDefault();
        window.location.href = '/Main';
    };

    return (
        <div>
            <div className="header">
                <div className="section">
                    Bridge ID: {bridgeId}
                </div>
                <Link to="/Main">
                    <img src={exit} className="x-icon" alt="x" onClick={closeMenu} />
                </Link>
            </div>
            <div className="bridge-view-buttons">
                <button onClick={handleButtonClick}>Bridge Tabular Features</button>
                <button onClick={handleSequentialButtonClick}>Bridge Sequential Features</button>
                <button onClick={handlePredictionButtonClick}>Bridge AI Prediction V.1</button>
            </div>
            {showDropdown && (
                <div className="dropdown-menu">
                    {/* Dropdown menu content */}
                    <button onClick={() => handleDropdownButtonClick('customContent1')}>Deck Condition</button>
                    <button onClick={() => handleDropdownButtonClick('customContent2')}>Substructure Condition</button>
                    <button onClick={() => handleDropdownButtonClick('customContent3')}>Superstructure Condition</button>
                    <button onClick={() => handleDropdownButtonClick('customContent4')}>Channel Condition</button>
                    <button onClick={() => handleDropdownButtonClick('customContent5')}>Average Daily Traffic</button>
                    <button onClick={() => handleDropdownButtonClick('customContent6')}>Year ADT</button>
                    <button onClick={() => handleDropdownButtonClick('customContent7')}>Age</button>
                </div>
            )}
            <div className="content-wrapper">
                {showTable && (
                    <div className="table-container">
                        <table>
                            <thead>
                                <tr>
                                    <th>Features</th>
                                    <th>Values</th>
                                </tr>
                            </thead>
                            <tbody>
                                <tr>
                                    <td>HIGHWAY_DISTRICT_002</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][0]}</td>
                                </tr>
                                <tr>
                                    <td>COUNTY_CODE_003</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][1]}</td>
                                </tr>
                                <tr>
                                    <td>ROUTE_PREFIX_005B</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][2]}</td>
                                </tr>
                                <tr>
                                    <td>SERVICE_LEVEL_005C</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][3]}</td>
                                </tr>
                                <tr>
                                    <td>DIRECTION_005E</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][4]}</td>
                                </tr>
                                <tr>
                                    <td>MIN_VERT_CLR_010</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][5]}</td>
                                </tr>
                                <tr>
                                    <td>LAT_016</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][6]}</td>
                                </tr>
                                <tr>
                                    <td>LONG_017</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][7]}</td>
                                </tr>
                                <tr>
                                    <td>DETOUR_KILOS_019</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][8]}</td>
                                </tr>
                                <tr>
                                    <td>TOLL_020</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][9]}</td>
                                </tr>
                                <tr>
                                    <td>MAINTENANCE_021</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][10]}</td>
                                </tr>
                                <tr>
                                    <td>OWNER_022</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][11]}</td>
                                </tr>
                                <tr>
                                    <td>FUNCTIONAL_CLASS_026</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][12]}</td>
                                </tr>
                                <tr>
                                    <td>YEAR_BUILT_027</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][13]}</td>
                                </tr>
                                <tr>
                                    <td>TRAFFIC_LANES_ON_028A</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][14]}</td>
                                </tr>
                                <tr>
                                    <td>TRAFFIC_LANES_UND_028B</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][15]}</td>
                                </tr>
                                <tr>
                                    <td>DESIGN_LOAD_031</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][16]}</td>
                                </tr>
                                <tr>
                                    <td>APPR_WIDTH_MT_032</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][17]}</td>
                                </tr>
                                <tr>
                                    <td>MEDIAN_CODE_033</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][18]}</td>
                                </tr>
                                <tr>
                                    <td>DEGREES_SKEW_034</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][19]}</td>
                                </tr>
                                <tr>
                                    <td>STRUCTURE_FLARED_035</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][20]}</td>
                                </tr>
                                <tr>
                                    <td>RAILINGS_036A</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][21]}</td>
                                </tr>
                                <tr>
                                    <td>TRANSITIONS_036B</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][22]}</td>
                                </tr>
                                <tr>
                                    <td>APPR_RAIL_036C</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][23]}</td>
                                </tr>
                                <tr>
                                    <td>APPR_RAIL_END_036D</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][24]}</td>
                                </tr>
                                <tr>
                                    <td>HISTORY_037</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][25]}</td>
                                </tr>
                                <tr>
                                    <td>NAVIGATION_038</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][26]}</td>
                                </tr>
                                <tr>
                                    <td>NAV_VERT_CLR_MT_039</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][27]}</td>
                                </tr>
                                <tr>
                                    <td>NAV_HORR_CLR_MT_040</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][28]}</td>
                                </tr>
                                <tr>
                                    <td>OPEN_CLOSED_POSTED_041</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][29]}</td>
                                </tr>
                                <tr>
                                    <td>SERVICE_ON_042A</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][30]}</td>
                                </tr>
                                <tr>
                                    <td>SERVICE_UND_042B</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][31]}</td>
                                </tr>
                                <tr>
                                    <td>STRUCTURE_KIND_043A</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][32]}</td>
                                </tr>
                                <tr>
                                    <td>STRUCTURE_TYPE_043B</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][33]}</td>
                                </tr>
                                <tr>
                                    <td>APPR_KIND_044A</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][34]}</td>
                                </tr>
                                <tr>
                                    <td>APPR_TYPE_044B</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][35]}</td>
                                </tr>
                                <tr>
                                    <td>MAIN_UNIT_SPANS_045</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][36]}</td>
                                </tr>
                                <tr>
                                    <td>APPR_SPANS_046</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][37]}</td>
                                </tr>
                                <tr>
                                    <td>HORR_CLR_MT_047</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][38]}</td>
                                </tr>
                                <tr>
                                    <td>MAX_SPAN_LEN_MT_048</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][39]}</td>
                                </tr>
                                <tr>
                                    <td>STRUCTURE_LEN_MT_049</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][40]}</td>
                                </tr>
                                <tr>
                                    <td>LEFT_CURB_MT_050A</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][41]}</td>
                                </tr>
                                <tr>
                                    <td>RIGHT_CURB_MT_050B</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][42]}</td>
                                </tr>
                                <tr>
                                    <td>ROADWAY_WIDTH_MT_051</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][43]}</td>
                                </tr>
                                <tr>
                                    <td>DECK_WIDTH_MT_052</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][44]}</td>
                                </tr>
                                <tr>
                                    <td>VERT_CLR_OVER_MT_053</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][45]}</td>
                                </tr>
                                <tr>
                                    <td>VERT_CLR_UND_REF_054A</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][46]}</td>
                                </tr>
                                <tr>
                                    <td>VERT_CLR_UND_054B</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][47]}</td>
                                </tr>
                                <tr>
                                    <td>LAT_UND_MT_055B</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][48]}</td>
                                </tr>
                                <tr>
                                    <td>LEFT_LAT_UND_MT_056</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][49]}</td>
                                </tr>
                                <tr>
                                    <td>OPR_RATING_METH_063</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][50]}</td>
                                </tr>
                                <tr>
                                    <td>OPERATING_RATING_064</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][51]}</td>
                                </tr>
                                <tr>
                                    <td>INV_RATING_METH_065</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][52]}</td>
                                </tr>
                                <tr>
                                    <td>INVENTORY_RATING_066</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][53]}</td>
                                </tr>
                                <tr>
                                    <td>DECK_GEOMETRY_EVAL_068</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][54]}</td>
                                </tr>
                                <tr>
                                    <td>UNDCLRENCE_EVAL_069</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][55]}</td>
                                </tr>
                                <tr>
                                    <td>POSTING_EVAL_070</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][56]}</td>
                                </tr>
                                <tr>
                                    <td>WATERWAY_EVAL_071</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][57]}</td>
                                </tr>
                                <tr>
                                    <td>APPR_ROAD_EVAL_072</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][58]}</td>
                                </tr>
                                <tr>
                                    <td>WORK_PROPOSED_075A</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][59]}</td>
                                </tr>
                                <tr>
                                    <td>WORK_DONE_BY_075B</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][60]}</td>
                                </tr>
                                <tr>
                                    <td>IMP_LEN_MT_076</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][61]}</td>
                                </tr>
                                <tr>
                                    <td>INSPECT_FREQ_MONTHS_091</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][62]}</td>
                                </tr>
                                <tr>
                                    <td>FRACTURE_092A</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][63]}</td>
                                </tr>
                                <tr>
                                    <td>UNDWATER_LOOK_SEE_092B</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][64]}</td>
                                </tr>
                                <tr>
                                    <td>SPEC_INSPECT_092C</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][65]}</td>
                                </tr>
                                <tr>
                                    <td>BRIDGE_IMP_COST_094</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][66]}</td>
                                </tr>
                                <tr>
                                    <td>ROADWAY_IMP_COST_095</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][67]}</td>
                                </tr>
                                <tr>
                                    <td>TOTAL_IMP_COST_096</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][68]}</td>
                                </tr>
                                <tr>
                                    <td>YEAR_OF_IMP_097</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][69]}</td>
                                </tr>
                                <tr>
                                    <td>OTHER_STATE_PCNT_098B</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][70]}</td>
                                </tr>
                                <tr>
                                    <td>STRAHNET_HIGHWAY_100</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][71]}</td>
                                </tr>
                                <tr>
                                    <td>TRAFFIC_DIRECTION_102</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][72]}</td>
                                </tr>
                                <tr>
                                    <td>HIGHWAY_SYSTEM_104</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][73]}</td>
                                </tr>
                                <tr>
                                    <td>FEDERAL_LANDS_105</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][74]}</td>
                                </tr>
                                <tr>
                                    <td>YEAR_RECONSTRUCTED_106</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][75]}</td>
                                </tr>
                                <tr>
                                    <td>DECK_STRUCTURE_TYPE_107</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][76]}</td>
                                </tr>
                                <tr>
                                    <td>SURFACE_TYPE_108A</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][77]}</td>
                                </tr>
                                <tr>
                                    <td>MEMBRANE_TYPE_108B</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][78]}</td>
                                </tr>
                                <tr>
                                    <td>DECK_PROTECTION_108C</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][79]}</td>
                                </tr>
                                <tr>
                                    <td>PERCENT_ADT_TRUCK_109</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][80]}</td>
                                </tr>
                                <tr>
                                    <td>NATIONAL_NETWORK_110</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][81]}</td>
                                </tr>
                                <tr>
                                    <td>PIER_PROTECTION_111</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][82]}</td>
                                </tr>
                                <tr>
                                    <td>STATE</td>
                                    <td>{bridgeData[bridgeId]["tabular_data"][83]}</td>
                                </tr>
                            </tbody>
                        </table>
                    </div>
                )}
                {showCustomContents.customContent1 && (
                    <div className='custom-content'>
                        <div className="chart-container">
                            <h2 style={{ textAlign: "center" }}>Deck Condition</h2>
                            <Line
                                data={{
                                    labels: [1992, 1997, 2002, 2007, 2012, 2017, 2022],
                                    datasets: [
                                        {
                                            label: "Deck Condition",
                                            data: bridgeData[bridgeId]["sequential_data"][9], // Using the 10th array for deck condition
                                            fill: false,
                                            borderColor: "rgb(75, 192, 192)",
                                            tension: 0.1
                                        }
                                    ]
                                }}
                                options={{
                                    scales: {
                                        x: {
                                            title: {
                                                display: true,
                                                text: 'Year'
                                            }
                                        },
                                        y: {
                                            title: {
                                                display: true,
                                                text: 'Deck Condition'
                                            },
                                            min: 0,
                                            max: 10,
                                            ticks: {
                                                stepSize: 1
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                )}
                {showCustomContents.customContent2 && (
                    <div className='custom-content'>
                        <div className="chart-container">
                            <h2 style={{ textAlign: "center" }}>Substructure Condition</h2>
                            <Line
                                data={{
                                    labels: [1992, 1997, 2002, 2007, 2012, 2017, 2022],
                                    datasets: [
                                        {
                                            label: "Substructure Condition",
                                            data: bridgeData[bridgeId]["sequential_data"][11], // Using the 10th array for deck condition
                                            fill: false,
                                            borderColor: "rgb(75, 192, 192)",
                                            tension: 0.1
                                        }
                                    ]
                                }}
                                options={{
                                    scales: {
                                        x: {
                                            title: {
                                                display: true,
                                                text: 'Year'
                                            }
                                        },
                                        y: {
                                            title: {
                                                display: true,
                                                text: 'Substructure Condition'
                                            },
                                            min: 0,
                                            max: 10,
                                            ticks: {
                                                stepSize: 1
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                )}
                {showCustomContents.customContent3 && (
                    <div className='custom-content'>
                        <div className="chart-container">
                            <h2 style={{ textAlign: "center" }}>Superstructure Condition</h2>
                            <Line
                                data={{
                                    labels: [1992, 1997, 2002, 2007, 2012, 2017, 2022],
                                    datasets: [
                                        {
                                            label: "Superstructure Condition",
                                            data: bridgeData[bridgeId]["sequential_data"][10], // Using the 10th array for deck condition
                                            fill: false,
                                            borderColor: "rgb(75, 192, 192)",
                                            tension: 0.1
                                        }
                                    ]
                                }}
                                options={{
                                    scales: {
                                        x: {
                                            title: {
                                                display: true,
                                                text: 'Year'
                                            }
                                        },
                                        y: {
                                            title: {
                                                display: true,
                                                text: 'Superstructure Condition'
                                            },
                                            min: 0,
                                            max: 10,
                                            ticks: {
                                                stepSize: 1
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                )}
                {showCustomContents.customContent4 && (
                    <div className='custom-content'>
                        <div className="chart-container">
                            <h2 style={{ textAlign: "center" }}>Channel Condition</h2>
                            <Line
                                data={{
                                    labels: [1992, 1997, 2002, 2007, 2012, 2017, 2022],
                                    datasets: [
                                        {
                                            label: "Channel Condition",
                                            data: bridgeData[bridgeId]["sequential_data"][2], // Using the 10th array for deck condition
                                            fill: false,
                                            borderColor: "rgb(75, 192, 192)",
                                            tension: 0.1
                                        }
                                    ]
                                }}
                                options={{
                                    scales: {
                                        x: {
                                            title: {
                                                display: true,
                                                text: 'Year'
                                            }
                                        },
                                        y: {
                                            title: {
                                                display: true,
                                                text: 'Channel Condition'
                                            },
                                            min: 0,
                                            max: 10,
                                            ticks: {
                                                stepSize: 1
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                )}
                {showCustomContents.customContent5 && (
                    <div className='custom-content'>
                        <div className="chart-container">
                            <h2 style={{ textAlign: "center" }}>Average Daily Traffic</h2>
                            <Line
                                data={{
                                    labels: [1992, 1997, 2002, 2007, 2012, 2017, 2022],
                                    datasets: [
                                        {
                                            label: "Average Daily Traffic",
                                            data: bridgeData[bridgeId]["sequential_data"][0], // Using the 10th array for deck condition
                                            fill: false,
                                            borderColor: "rgb(75, 192, 192)",
                                            tension: 0.1
                                        }
                                    ]
                                }}
                                options={{
                                    scales: {
                                        x: {
                                            title: {
                                                display: true,
                                                text: 'Year'
                                            }
                                        },
                                        y: {
                                            title: {
                                                display: true,
                                                text: 'Deck Condition'
                                            },
                                            min: 0,
                                            max: 200000,
                                            ticks: {
                                                stepSize: 10000
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                )}
                {showCustomContents.customContent6 && (
                    <div className='custom-content'>
                        <div className="chart-container">
                            <h2 style={{ textAlign: "center" }}>Year Average Daily Traffic</h2>
                            <Line
                                data={{
                                    labels: bridgeData[bridgeId]["sequential_data"][1],
                                    datasets: [
                                        {
                                            label: "Year ADT",
                                            data: bridgeData[bridgeId]["sequential_data"][0], // Using the 10th array for deck condition
                                            fill: false,
                                            borderColor: "rgb(75, 192, 192)",
                                            tension: 0.1
                                        }
                                    ]
                                }}
                                options={{
                                    scales: {
                                        x: {
                                            title: {
                                                display: true,
                                                text: 'Year'
                                            }
                                        },
                                        y: {
                                            title: {
                                                display: true,
                                                text: 'Year ADT'
                                            },
                                            min: 0,
                                            max: 200000,
                                            ticks: {
                                                stepSize: 10000
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                )}
                {showCustomContents.customContent7 && (
                    <div className='custom-content'>
                        <div className="chart-container">
                            <h2 style={{ textAlign: "center" }}>Age</h2>
                            <Line
                                data={{
                                    labels: [1992, 1993, 1994, 1995, 1996, 1997, 1998],
                                    datasets: [
                                        {
                                            label: "Year ADT",
                                            data: bridgeData[bridgeId]["sequential_data"][8], // Using the 10th array for deck condition
                                            fill: false,
                                            borderColor: "rgb(75, 192, 192)",
                                            tension: 0.1
                                        }
                                    ]
                                }}
                                options={{
                                    scales: {
                                        x: {
                                            title: {
                                                display: true,
                                                text: 'Year'
                                            }
                                        },
                                        y: {
                                            title: {
                                                display: true,
                                                text: 'Age'
                                            },
                                            min: 0,
                                            max: 50,
                                            ticks: {
                                                stepSize: 5
                                            }
                                        }
                                    }
                                }}
                            />
                        </div>
                    </div>
                )}
                <div className="data-display-box">
                    <div>Longitude: {Number(bridgeData[bridgeId]['Location'][3]).toFixed(2)}</div>
                    <div>Latitude: {Number(bridgeData[bridgeId]['Location'][4]).toFixed(2)}</div>
                </div>
            </div>
        </div>
    );
};

export default BridgeDetailsTemplate;
