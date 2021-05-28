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
        style={styles.ImageBackground_0_392}
      />
      <View style={styles.View_0_394}>
        <Text style={styles.Text_0_394}>Notification</Text>
      </View>
      <View style={styles.View_0_395}>
        <View style={styles.View_0_396} />
        <View style={styles.View_0_397} />
      </View>
      <View style={styles.View_0_398}>
        <View style={styles.View_0_399}>
          <View style={styles.View_0_400}>
            <View style={styles.View_0_401}>
              <Text style={styles.Text_0_401}>Joel Rowe</Text>
            </View>
            <View style={styles.View_0_402}>
              <Text style={styles.Text_0_402}>Bitrow Company</Text>
            </View>
          </View>
          <View style={styles.View_0_403}>
            <Text style={styles.Text_0_403}>
              Sorry, all the artists in the Interior Design category are busy
              right now. If your task is still relevant - go to the task details
              page and click &quot;Extend task”.
            </Text>
          </View>
          <View style={styles.View_0_404}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b3b/ee57/6fd28477fe0a6241eac623396726a285"
              }}
              style={styles.ImageBackground_0_406}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb88/5abf/63cfa6c557d6551787b2a1077b508ee8"
              }}
              style={styles.ImageBackground_0_405}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/99d1/60e2/d2702d23adf8605ef8023de0e408d777"
              }}
              style={styles.ImageBackground_0_407}
            />
          </View>
        </View>
        <View style={styles.View_0_408} />
        <View style={styles.View_0_409}>
          <View style={styles.View_0_410}>
            <View style={styles.View_0_411}>
              <Text style={styles.Text_0_411}>Cole Payne</Text>
            </View>
            <View style={styles.View_0_412}>
              <Text style={styles.Text_0_412}>Corporation Kraton</Text>
            </View>
          </View>
          <View style={styles.View_0_413}>
            <Text style={styles.Text_0_413}>
              We have found a contractor for your task &quot;Cleaning services”.
              Please see the details.
            </Text>
          </View>
          <View style={styles.View_0_414}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b3b/ee57/6fd28477fe0a6241eac623396726a285"
              }}
              style={styles.ImageBackground_0_416}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb88/5abf/63cfa6c557d6551787b2a1077b508ee8"
              }}
              style={styles.ImageBackground_0_415}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b014/2a54/b8cfd94309fa9963d0a181573c8da5aa"
              }}
              style={styles.ImageBackground_0_417}
            />
          </View>
        </View>
        <View style={styles.View_0_418} />
        <View style={styles.View_0_419}>
          <View style={styles.View_0_420}>
            <View style={styles.View_0_421}>
              <Text style={styles.Text_0_421}>Elva Stone</Text>
            </View>
            <View style={styles.View_0_422}>
              <Text style={styles.Text_0_422}>Grand Service Company</Text>
            </View>
          </View>
          <View style={styles.View_0_423}>
            <Text style={styles.Text_0_423}>
              David Coleman is ready to complete your assignment and get started
              soon! View David&#39;s profile and carefully review the order
              details. Then confirm the order.
            </Text>
          </View>
          <View style={styles.View_0_424}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4b3b/ee57/6fd28477fe0a6241eac623396726a285"
              }}
              style={styles.ImageBackground_0_426}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bb88/5abf/63cfa6c557d6551787b2a1077b508ee8"
              }}
              style={styles.ImageBackground_0_425}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da83/a352/ae720af5cffc7a02bdb8e43f74206815"
              }}
              style={styles.ImageBackground_0_427}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_428}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a182/6dde/58f75e4708a864483a5bc28b3516d2d2"
          }}
          style={styles.ImageBackground_0_429}
        />
        <View style={styles.View_0_430}>
          <Text style={styles.Text_0_430}>View all</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_0_392: {
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
  View_0_394: {
    width: wp("29.599999999999998%"),
    minWidth: wp("29.599999999999998%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("35.199999999999996%"),
    top: hp("4.098360655737705%")
  },
  Text_0_394: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.37500011920928955,
    textTransform: "none"
  },
  View_0_395: {
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
  View_0_396: {
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
  View_0_397: {
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
  View_0_398: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("75.40983606557377%"),
    minHeight: hp("75.40983606557377%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("14.207650273224044%")
  },
  View_0_399: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("22.131147540983605%"),
    minHeight: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_400: {
    width: wp("29.599999999999998%"),
    height: hp("5.8743169398907105%"),
    top: hp("0.6830601092896167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_401: {
    width: wp("21.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_401: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_402: {
    width: wp("29.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%")
  },
  Text_0_402: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.29166677594184875,
    textTransform: "none"
  },
  View_0_403: {
    width: wp("82.39999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.016393442622952%")
  },
  Text_0_403: {
    color: "rgba(97, 97, 115, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_0_404: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_406: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_405: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_407: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_408: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("25.956284153005466%"),
    backgroundColor: "rgba(247, 247, 251, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_409: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("15.573770491803279%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("29.918032786885245%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_410: {
    width: wp("34.66666666666667%"),
    height: hp("5.8743169398907105%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_411: {
    width: wp("23.200000000000003%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0%")
  },
  Text_0_411: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_412: {
    width: wp("34.66666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%")
  },
  Text_0_412: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.29166677594184875,
    textTransform: "none"
  },
  View_0_413: {
    width: wp("82.39999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.016393442622949%")
  },
  Text_0_413: {
    color: "rgba(97, 97, 115, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_0_414: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_416: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_415: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_417: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_418: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("0.1366120218579235%"),
    minHeight: hp("0.1366120218579235%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("49.31693989071039%"),
    backgroundColor: "rgba(247, 247, 251, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_419: {
    width: wp("82.39999999999999%"),
    minWidth: wp("82.39999999999999%"),
    height: hp("22.131147540983605%"),
    minHeight: hp("22.131147540983605%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("53.27868852459015%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_420: {
    width: wp("44%"),
    height: hp("5.8743169398907105%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.6%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_421: {
    width: wp("21.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_421: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_422: {
    width: wp("44%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.868852459016395%")
  },
  Text_0_422: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.29166677594184875,
    textTransform: "none"
  },
  View_0_423: {
    width: wp("82.39999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("9.016393442622956%")
  },
  Text_0_423: {
    color: "rgba(97, 97, 115, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_0_424: {
    width: wp("13.333333333333334%"),
    minWidth: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    minHeight: hp("6.830601092896176%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_426: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_425: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_427: {
    width: wp("13.333333333333334%"),
    height: hp("6.830601092896176%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_428: {
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
  ImageBackground_0_429: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_430: {
    width: wp("16%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("34.13333333333333%"),
    top: hp("2.868852459016395%")
  },
  Text_0_430: {
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
