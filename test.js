{
    "common": {
    "name": "smappee",
        "version": "0.2.3",
        "news": {
        "0.2.3": {
            "en": "changed the behavior of plug.x.state from ON/OFF to 1/0 to be able to process the state in VIS",
                "de": "geändertes Verhalten von plug.x.state um den Status als 1/0 anstelle von ON/OFF zu setzen, um dies in VIS weiter verarbeiten zu können",
        },
        "0.2.2": {
            "en": "Readme - update.",
                "de": "Readme - update."
        },
        "0.2.1": {
            "en": "Core Files/Testing Update and introduce adapter-core, added counters for sensor that sum the 5-min values.",
                "de": "Core Files/Testing Update und adapter-core eingeführt, Summenzähler für Gas_Wasser - Sensoren und  Smartswitches erstellt."
        },
        "0.2.0": {
            "en": "Controls smart plugs and smart switches, gets states and 5-min power consumption for switchsensors in Wh.",
                "de": "Schalten von Smartplugs und Smartswitches, Verbrauchsmessung (5min) für Smartswitches in Wh und Statuswerte für Switches und Plugs."
        },
        "0.1.3": {
            "en": "Controls smart plugs and smart switches, gets 5-min power consuption for switch sensors (smart switches) in Wh. Small bugs eliminated [For testing only]",
                "de": "Testversion integration smart swiches mit Messung in Wh, kleinere Fehler korrigiert"
        },
        "0.1.2": {
            "en": "Controls smart plugs and smart switches, gets 5-min power consuption for switch sensors (smart switches). [For testing only]",
                "de": "Testversion integration smart swiches mit Messung"
        },
        "0.1.1": {
            "en": "Imports names & states of switches/plugs. Lets you control your swiches.",
                "de": "Importiert Namen und Stati von Steckdosen-Schaltern, ermöglicht das Schalten der Steckdosen-Schalter"
        },
        "0.1.0": {
            "en": "Gas_Water Sensor integrated, 'alwaysOn' integrated.",
                "de": "Gas_Wasser Sensor und Dauerverbrauch integriert."
        },
        "0.0.5": {
            "en": "design-bug fixed, Gas_Water Sensor integrated (only raw value).",
                "de": "Ablauf - Fehler behoben, Gas_Wasser Sensor integriert (nur Rohwert)"
        },
        "0.0.4": {
            "en": "credentials - bug fixed, more efficient design, gulp update",
                "de": "Usr/PW - Fehler behoben, effizienteres design, gulp update"
        },
        "0.0.3": {
            "en": "first tested version, config - bug fixed",
                "de": "Erste getestete Version, Fehler im Config-Dialog behoben."
        },
        "0.0.2": {
            "en": "reads phase config, reports single phase data",
                "de": "Liest Phasenkonfiguration, zeigt Daten zu einzelnen Phasen."
        },
        "0.0.1": {
            "en": "initial adapter, displays realtime (1s) power and energy consumption.",
                "de": "Initiale Version, zeigt aktuelle Leistung und Verbrauch in Echzeit(1s)."
        }
    },
    "title": "smappee",
        "titleLang": {
        "en": "smappeeMonitor",
            "de": "smappeeMonitor"
    },
    "desc": {
        "en": "Monitor and control your smappee device",
            "de": "Überwache und steuere deinen Smappee"
    },
    "authors": [
        "forelleblau <marceladam@gmx.ch>"
    ],
        "platform": "Javascript/Node.js",
        "mode": "daemon",
        "compact": true,
        "icon": "smappee.png",
        "materialize": true,
        "enabled": true,
        "extIcon": "https://raw.githubusercontent.com/iobroker-community-adapters/ioBroker.smappee/master/admin/smappee.png",
        "keywords": [
        "smappee",
        "smarthome",
        "energy",
        "smartmeter",
        "water"
    ],
        "readme": "https://github.com/iobroker-community-adapters/ioBroker.smappee/blob/master/README.md",
        "loglevel": "info",
        "type": "energy",
        "license": "MIT",
        "messagebox": false
},
    "native": {
    "mqtthost": "localhost",
        "mqttport": 1883,
        "mqttusername": "",
        "mqttpassword": ""
},

    "objects": [],
    "instanceObjects": [{
    "_id": "info",
    "type": "channel",
    "common": {
        "name": "Information"
    },
    "native": {

    }
},
    {
        "_id": "info.connection",
        "type": "state",
        "common": {
            "name": "smappee connected",
            "type": "boolean",
            "role": "indicator.connected",
            "read": true,
            "write": false,
            "def": false,
            "desc": "Is smappee connected?"
        },
        "native": {

        }
    }
]
}
