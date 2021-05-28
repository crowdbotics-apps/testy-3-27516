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
        style={styles.ImageBackground_0_751}
      />
      <View style={styles.View_0_753}>
        <Text style={styles.Text_0_753}>Payment cards</Text>
      </View>
      <View style={styles.View_0_754}>
        <View style={styles.View_0_755} />
        <View style={styles.View_0_756} />
      </View>
      <View style={styles.View_0_757}>
        <View style={styles.View_0_758}>
          <View style={styles.View_0_759} />
          <View style={styles.View_0_760}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7116/7ef8/1597e0e290405e7a8f922219b6bf80cf"
              }}
              style={styles.ImageBackground_0_761}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7116/7ef8/1597e0e290405e7a8f922219b6bf80cf"
              }}
              style={styles.ImageBackground_0_762}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7116/7ef8/1597e0e290405e7a8f922219b6bf80cf"
              }}
              style={styles.ImageBackground_0_763}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7116/7ef8/1597e0e290405e7a8f922219b6bf80cf"
              }}
              style={styles.ImageBackground_0_764}
            />
            <View style={styles.View_0_765}>
              <Text style={styles.Text_0_765}>3872</Text>
            </View>
          </View>
          <View style={styles.View_0_766}>
            <Text style={styles.Text_0_766}>17/20</Text>
          </View>
          <View style={styles.View_0_767}>
            <Text style={styles.Text_0_767}>$ 25,388</Text>
          </View>
        </View>
        <View style={styles.View_0_768}>
          <View style={styles.View_0_769}>
            <Text style={styles.Text_0_769}>Card Number</Text>
          </View>
          <View style={styles.View_0_770}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/129f/7337/be953e504ca99d7e75e52f5bccf8e9ae"
              }}
              style={styles.ImageBackground_0_771}
            />
            <View style={styles.View_0_772}>
              <Text style={styles.Text_0_772}>**** **** ****</Text>
            </View>
            <View style={styles.View_0_773}>
              <Text style={styles.Text_0_773}>3872</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_774}>
          <Text style={styles.Text_0_774}>Exp. Month</Text>
        </View>
        <View style={styles.View_0_775}>
          <Text style={styles.Text_0_775}>Exp.Year</Text>
        </View>
        <View style={styles.View_0_776}>
          <Text style={styles.Text_0_776}>CVV</Text>
        </View>
        <View style={styles.View_0_777}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31cb/b5d5/9bbcdd1128a2bda0822b2f0c5d793d34"
            }}
            style={styles.ImageBackground_0_778}
          />
          <View style={styles.View_0_779}>
            <Text style={styles.Text_0_779}>07</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a86/5f16/6215cd0212f13088d2ba327c7d012893"
            }}
            style={styles.ImageBackground_0_780}
          />
        </View>
        <View style={styles.View_0_782}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31cb/b5d5/9bbcdd1128a2bda0822b2f0c5d793d34"
            }}
            style={styles.ImageBackground_0_783}
          />
          <View style={styles.View_0_784}>
            <Text style={styles.Text_0_784}>2022</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/1a86/5f16/6215cd0212f13088d2ba327c7d012893"
            }}
            style={styles.ImageBackground_0_785}
          />
        </View>
        <View style={styles.View_0_787}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/31cb/b5d5/9bbcdd1128a2bda0822b2f0c5d793d34"
            }}
            style={styles.ImageBackground_0_788}
          />
          <View style={styles.View_0_789}>
            <Text style={styles.Text_0_789}>***</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c9fc/59d1/5466e20d33a70b19c6c4be9bc32425e7"
            }}
            style={styles.ImageBackground_0_792}
          />
        </View>
      </View>
      <View style={styles.View_0_795}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a182/6dde/58f75e4708a864483a5bc28b3516d2d2"
          }}
          style={styles.ImageBackground_0_796}
        />
        <View style={styles.View_0_797}>
          <Text style={styles.Text_0_797}>Save card</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_0_751: {
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
  View_0_753: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("4.098360655737705%")
  },
  Text_0_753: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.37500011920928955,
    textTransform: "none"
  },
  View_0_754: {
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
  View_0_755: {
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
  View_0_756: {
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
  View_0_757: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("63.387978142076506%"),
    minHeight: hp("63.387978142076506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("14.207650273224044%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_758: {
    width: wp("84%"),
    height: hp("27.595628415300546%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_759: {
    width: wp("83.82527669270833%"),
    height: hp("27.4941720597731%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_760: {
    width: wp("21.333333333333336%"),
    height: hp("2.459016393442623%"),
    top: hp("2.618491584485998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133593750000001%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_761: {
    width: wp("0.7666946411132812%"),
    height: hp("0.39277389401295143%"),
    top: hp("1.0473970507012034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_762: {
    width: wp("0.7666946411132812%"),
    height: hp("0.39277389401295143%"),
    top: hp("1.0473970507012034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.811197916666666%")
  },
  ImageBackground_0_763: {
    width: wp("0.7666946411132812%"),
    height: hp("0.39277389401295143%"),
    top: hp("1.0473970507012034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.62239583333333%")
  },
  ImageBackground_0_764: {
    width: wp("0.7666946411132812%"),
    height: hp("0.39277389401295143%"),
    top: hp("1.0473970507012034%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.433593749999998%")
  },
  View_0_765: {
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.267057291666665%"),
    top: hp("0%")
  },
  Text_0_765: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.333892822265625,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.38334736227989197,
    textTransform: "none"
  },
  View_0_766: {
    width: wp("10.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("66.70247395833334%"),
    top: hp("2.618491584485998%")
  },
  Text_0_766: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 12.333892822265625,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.38334736227989197,
    textTransform: "none"
  },
  View_0_767: {
    width: wp("26.400000000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133593750000001%"),
    top: hp("20.817015600986164%")
  },
  Text_0_767: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 19.91757583618164,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.62293940782547,
    textTransform: "none"
  },
  View_0_768: {
    width: wp("84%"),
    height: hp("13.387978142076504%"),
    top: hp("33.060109289617486%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_769: {
    width: wp("27.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_769: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_770: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("5.191256830601091%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_771: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_772: {
    width: wp("24%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666665%"),
    top: hp("3.415300546448087%")
  },
  Text_0_772: {
    color: "rgba(176, 176, 195, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_0_773: {
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("30.93333333333333%"),
    top: hp("2.868852459016395%")
  },
  Text_0_773: {
    color: "rgba(176, 176, 195, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_0_774: {
    width: wp("22.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("50%")
  },
  Text_0_774: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_775: {
    width: wp("17.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333336%"),
    top: hp("50%")
  },
  Text_0_775: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_776: {
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("58.400000000000006%"),
    top: hp("50%")
  },
  Text_0_776: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_777: {
    width: wp("26.666666666666668%"),
    height: hp("8.19672131147541%"),
    top: hp("55.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_778: {
    width: wp("26.666666666666668%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_779: {
    width: wp("5.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333325%"),
    top: hp("2.868852459016395%")
  },
  Text_0_779: {
    color: "rgba(176, 176, 195, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_0_780: {
    width: wp("3.2%"),
    height: hp("1.053864187230178%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.73333333333333%")
  },
  View_0_782: {
    width: wp("26.666666666666668%"),
    height: hp("8.19672131147541%"),
    top: hp("55.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("28.799999999999997%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_783: {
    width: wp("26.666666666666668%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_784: {
    width: wp("9.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("2.868852459016395%")
  },
  Text_0_784: {
    color: "rgba(176, 176, 195, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_0_785: {
    width: wp("3.2%"),
    height: hp("1.053864187230178%"),
    top: hp("3.551912568306008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.73333333333334%")
  },
  View_0_787: {
    width: wp("26.666666666666668%"),
    height: hp("8.19672131147541%"),
    top: hp("55.19125683060109%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("57.33333333333333%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_788: {
    width: wp("26.666666666666668%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_789: {
    width: wp("5.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333343%"),
    top: hp("3.278688524590166%")
  },
  Text_0_789: {
    color: "rgba(176, 176, 195, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  ImageBackground_0_792: {
    width: wp("4.000009155273437%"),
    height: hp("1.5027322404371584%"),
    top: hp("3.41530054644808%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("18.933333333333337%")
  },
  View_0_795: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("97.26775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_796: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_797: {
    width: wp("20.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("31.46666666666667%"),
    top: hp("2.868852459016395%")
  },
  Text_0_797: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
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
