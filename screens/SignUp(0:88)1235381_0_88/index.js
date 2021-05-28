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
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88d4/1dec/1beaf22f38c9bf2d72198dbb7fd6dd26"
        }}
        style={styles.ImageBackground_0_89}
      />
      <View style={styles.View_0_91}>
        <Text style={styles.Text_0_91}>Sign Up</Text>
      </View>
      <View style={styles.View_0_92}>
        <View style={styles.View_0_93} />
        <View style={styles.View_0_94} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8f27/ee44/1527e7ed7e837a41f98f5a85bb3ba630"
        }}
        style={styles.ImageBackground_0_95}
      />
      <View style={styles.View_0_96}>
        <View style={styles.View_0_97}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/129f/7337/be953e504ca99d7e75e52f5bccf8e9ae"
            }}
            style={styles.ImageBackground_0_98}
          />
          <View style={styles.View_0_99}>
            <Text style={styles.Text_0_99}>Enter email</Text>
          </View>
        </View>
        <View style={styles.View_0_100}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/129f/7337/be953e504ca99d7e75e52f5bccf8e9ae"
            }}
            style={styles.ImageBackground_0_101}
          />
          <View style={styles.View_0_102}>
            <Text style={styles.Text_0_102}>Enter password</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d89e/813e/a1a32fdc69010aa8256118a8a5e259b4"
            }}
            style={styles.ImageBackground_0_105}
          />
        </View>
        <View style={styles.View_0_108}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/129f/7337/be953e504ca99d7e75e52f5bccf8e9ae"
            }}
            style={styles.ImageBackground_0_109}
          />
          <View style={styles.View_0_110}>
            <Text style={styles.Text_0_110}>Confirm password</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d89e/813e/a1a32fdc69010aa8256118a8a5e259b4"
            }}
            style={styles.ImageBackground_0_113}
          />
        </View>
        <View style={styles.View_0_116}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a182/6dde/58f75e4708a864483a5bc28b3516d2d2"
            }}
            style={styles.ImageBackground_0_117}
          />
          <View style={styles.View_0_118}>
            <Text style={styles.Text_0_118}>Sign Up</Text>
          </View>
        </View>
        <View style={styles.View_0_119}>
          <Text style={styles.Text_0_119}>or</Text>
        </View>
        <View style={styles.View_0_120}>
          <View style={styles.View_0_121}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c03/83f9/892a1eb563fe56f3848d3d481f7a746a"
              }}
              style={styles.ImageBackground_0_122}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c28f/46e8/1feef8cb1c1e99a7104ab12219159ab9"
              }}
              style={styles.ImageBackground_0_123}
            />
          </View>
          <View style={styles.View_0_125}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c03/83f9/892a1eb563fe56f3848d3d481f7a746a"
              }}
              style={styles.ImageBackground_0_126}
            />
            <View style={styles.View_0_127}>
              <View style={styles.View_0_128} />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/46e8/5b49/2f9863e9d1964faa1d3be383599bb5be"
                }}
                style={styles.ImageBackground_0_129}
              />
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2c03/83f9/892a1eb563fe56f3848d3d481f7a746a"
            }}
            style={styles.ImageBackground_0_130}
          />
          <View style={styles.View_0_131}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88db/5aba/ffdf4e6cdc5a0fc2066284e76112322f"
              }}
              style={styles.ImageBackground_0_134}
            />
          </View>
        </View>
        <View style={styles.View_0_136}>
          <Text style={styles.Text_0_136}>
            Already have an account? Sign In
          </Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_0_89: {
    width: wp("2.666666666666667%"),
    minWidth: wp("2.666666666666667%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("4.371584699453552%")
  },
  View_0_91: {
    width: wp("21.333333333333336%"),
    minWidth: wp("21.333333333333336%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("39.46666666666667%"),
    top: hp("4.098360655737705%")
  },
  Text_0_91: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.37500011920928955,
    textTransform: "none"
  },
  View_0_92: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("87.2%"),
    top: hp("4.918032786885246%")
  },
  View_0_93: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(82, 84, 100, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_94: {
    width: wp("3.2%"),
    minWidth: wp("3.2%"),
    height: hp("0.273224043715847%"),
    minHeight: hp("0.273224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5999999999999943%"),
    top: hp("0.8196721311475406%"),
    backgroundColor: "rgba(82, 84, 100, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_95: {
    width: wp("36.8%"),
    minWidth: wp("36.8%"),
    height: hp("19.262295081967213%"),
    minHeight: hp("19.262295081967213%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.733333333333334%"),
    top: hp("15.163934426229508%")
  },
  View_0_96: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("64.48087431693989%"),
    minHeight: hp("64.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("40.98360655737705%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_97: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_98: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_99: {
    width: wp("22.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666665%"),
    top: hp("2.868852459016388%")
  },
  Text_0_99: {
    color: "rgba(176, 176, 195, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_0_100: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("10.382513661202182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_101: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_102: {
    width: wp("31.466666666666665%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666665%"),
    top: hp("2.868852459016395%")
  },
  Text_0_102: {
    color: "rgba(176, 176, 195, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_0_105: {
    width: wp("4.800022888183594%"),
    height: hp("1.7574587806326445%"),
    top: hp("3.278688524590173%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%")
  },
  View_0_108: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("20.76502732240437%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_109: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_110: {
    width: wp("36.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666665%"),
    top: hp("2.868852459016395%")
  },
  Text_0_110: {
    color: "rgba(176, 176, 195, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_0_113: {
    width: wp("4.800022888183594%"),
    height: hp("1.7574587806326445%"),
    top: hp("3.2786885245901516%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.33333333333333%")
  },
  View_0_116: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("31.147540983606554%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_117: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_118: {
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("2.868852459016395%")
  },
  Text_0_118: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_0_119: {
    width: wp("4.266666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40%"),
    top: hp("41.53005464480875%")
  },
  Text_0_119: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_0_120: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("46.31147540983607%")
  },
  View_0_121: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_122: {
    width: wp("26.666666666666668%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_123: {
    width: wp("2.1333333333333333%"),
    height: hp("2.0491803278688523%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.266666666666666%")
  },
  View_0_125: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.799999999999997%"),
    top: hp("0%")
  },
  ImageBackground_0_126: {
    width: wp("26.666666666666668%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_127: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.666666666666671%"),
    top: hp("3.005464480874309%")
  },
  View_0_128: {
    width: wp("3.8095237731933596%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5238118489583314%")
  },
  ImageBackground_0_129: {
    width: wp("4.952380879720052%"),
    height: hp("2.146760362093566%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_130: {
    width: wp("26.666666666666668%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.33333333333333%")
  },
  View_0_131: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.53333333333333%"),
    top: hp("2.868852459016381%")
  },
  ImageBackground_0_134: {
    width: wp("4.235164896647135%"),
    height: hp("2.1599769592285156%"),
    top: hp("0.012006915983619137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.008056640625%")
  },
  View_0_136: {
    width: wp("69.06666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666667%"),
    top: hp("61.47540983606556%")
  },
  Text_0_136: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
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
