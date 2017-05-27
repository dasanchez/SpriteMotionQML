import QtQuick 2.0

Item {
    id: sprite
    width: 120
    height: 120

    Rectangle {
        id: main_body
        x: 10
        y: 0
        z: 1
        width: 100
        height: 100
        color: "white"
    }
    Rectangle {
        id: left_track
        x: 0
        y: 10
        z: 0
        width: 20
        height: 80
        color: "blue"
    }
    Rectangle {
        id: right_track
        x: 100
        y: 10
        z: 0
        width: 20
        height: 80
        color: "blue"
    }
    Rectangle {
        id: front_mark
        x: 50
        y: 10
        z: 2
        width: 20
        height: 20
        color: "black"
    }
}
