import QtQuick 2.8
import QtQuick.Window 2.2

Window {
    visible: true
    width: 600
    height: 600
    title: qsTr("Sprite Motion")
    color: "black"
    SpriteItem {
        x: 200
        y: 200
        focus: true
        Keys.onUpPressed: y -= 10
        Keys.onDownPressed: y += 10
        Keys.onLeftPressed: x -= 10
        Keys.onRightPressed: x += 10
    }

}
