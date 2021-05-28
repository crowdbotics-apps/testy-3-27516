import React from "react"
import {
  View,
  Image,
  ImageBackground,
  TouchableOpacity,
  Text,
  Button,
  Switch,
  TextInput,
  StyleSheet,
  ScrollView
} from "react-native"
import Icon from "react-native-vector-icons/FontAwesome"
import { CheckBox } from "react-native-elements"
import { connect } from "react-redux"
import {
  widthPercentageToDP as wp,
  heightPercentageToDP as hp
} from "react-native-responsive-screen"
import { getNavigationScreen } from "../../modules/utils"
export class Blank extends React.Component {
  constructor(props) {
    super(props)

    this.state = {}
  }
  render = () => (
    <ScrollView contentContainerStyle={{ flexGrow: 1 }}>
      <View style={styles.View_2} />
      <View style={styles.View_0_39}>
        <View style={styles.View_0_40}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e8fb/f366/a080466249d505869578fcd287d310be"
            }}
            style={styles.ImageBackground_0_41}
          />
          <View style={styles.View_0_42}>
            <View style={styles.View_I0_42_0_802}>
              <View style={styles.View_I0_42_0_800} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4f57/26c0/201d2495efbbf3b3e42c13d95a33b7e1"
                }}
                style={styles.ImageBackground_I0_42_0_801}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_43}>
        <Text style={styles.Text_0_43}>
          It&#39;s easy, just click on the plus
        </Text>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f0f4/270c/b7b7b96c070cbddeb2bd81f5df2d1869"
        }}
        style={styles.ImageBackground_0_44}
      />
      <View style={styles.View_0_45}>
        <Text style={styles.Text_0_45}>Create order</Text>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_0_39: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.2%"),
    top: hp("94.26229508196722%")
  },
  View_0_40: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_41: {
    width: wp("21.866666666666667%"),
    minWidth: wp("21.866666666666667%"),
    height: hp("11.202185792349727%"),
    minHeight: hp("11.202185792349727%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_42: {
    width: wp("9.066666666666666%"),
    minWidth: wp("9.066666666666666%"),
    height: hp("4.644808743169399%"),
    minHeight: hp("4.644808743169399%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.399999999999999%"),
    top: hp("3.2786885245901516%"),
    backgroundColor: "rgba(0, 0, 0, 0)"
  },
  View_I0_42_0_802: {
    flexGrow: 1,
    width: wp("6.044443766276042%"),
    height: hp("3.096538814690595%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5111002604166615%"),
    top: hp("0.7741375699069408%")
  },
  View_I0_42_0_800: {
    width: wp("0.9066668192545573%"),
    height: hp("3.096538814690595%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.56888020833334%"),
    backgroundColor: "rgba(129, 129, 129, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_I0_42_0_801: {
    width: wp("6.044443766276042%"),
    height: hp("0.4644809524869658%"),
    top: hp("1.3160330350281697%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_43: {
    width: wp("73.33333333333333%"),
    minWidth: wp("73.33333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333334%"),
    top: hp("79.50819672131148%")
  },
  Text_0_43: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  ImageBackground_0_44: {
    width: wp("48.53333333333333%"),
    minWidth: wp("48.53333333333333%"),
    height: hp("41.2568306010929%"),
    minHeight: hp("41.2568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("28.688524590163933%")
  },
  View_0_45: {
    width: wp("61.6%"),
    minWidth: wp("61.6%"),
    minHeight: hp("12.568306010928962%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.2%"),
    top: hp("8.19672131147541%")
  },
  Text_0_45: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 32,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
