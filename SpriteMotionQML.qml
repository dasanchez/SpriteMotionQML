import QtQuick 2.8
import QtQuick.Window 2.2
//import QtGamePad 1.0
import "kinematics.js" as Motion

Window {
    // custom counter property for space presses
    property real rotationAngle: 90
    property real xPosition: 200
    property real yPosition: 200

    visible: true
    width: 600
    height: 600
    title: qsTr("Sprite Motion")
    color: "black"
    SpriteItem {
        x: xPosition
        y: yPosition
        focus: true
        Keys.onUpPressed: {
            Motion.moveY(2)
        }
        Keys.onDownPressed: {
            Motion.moveY(-2)
        }
        Keys.onRightPressed: {
            Motion.rotateStep(-2)
        }
        Keys.onLeftPressed: {
            Motion.rotateStep(2)
        }
        Keys.onDigit9Pressed: {
            Motion.trackMotion(5,-5)
        }
        Keys.onDigit0Pressed: {
            Motion.trackMotion(-2,2)
        }
        Keys.onDigit8Pressed: {
            Motion.trackMotion(4,2)
        }
        Keys.onDigit7Pressed: {
            Motion.trackMotion(-5,-9)
        }

        transform: Rotation { origin.x: 60; origin.y: 60; angle: 90-rotationAngle }
    }
}

