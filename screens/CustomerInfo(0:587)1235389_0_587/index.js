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
        style={styles.ImageBackground_0_588}
      />
      <View style={styles.View_0_590}>
        <Text style={styles.Text_0_590}>Сustomer info</Text>
      </View>
      <View style={styles.View_0_591}>
        <View style={styles.View_0_592} />
        <View style={styles.View_0_593} />
      </View>
      <View style={styles.View_0_594}>
        <View style={styles.View_0_595}>
          <Text style={styles.Text_0_595}>Portfolio</Text>
        </View>
        <View style={styles.View_0_596}>
          <Text style={styles.Text_0_596}>
            The last completed works of the contractor are shown below.
          </Text>
        </View>
        <View style={styles.View_0_597}>
          <View style={styles.View_0_598}>
            <View style={styles.View_0_599}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/97ea/a4c3/7926de9988d37c38e439f1bc4ce93fec"
                }}
                style={styles.ImageBackground_0_601}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b2d2/40d0/e8f067ee84c9cba1aed23627f7ce25ca"
                }}
                style={styles.ImageBackground_0_600}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bd0f/b41e/f962e5b98552f1a9732a3d996d179b3d"
                }}
                style={styles.ImageBackground_0_602}
              />
            </View>
          </View>
          <View style={styles.View_0_603}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/995c/a432/ffcc99ca3def15bd260dc7979218d103"
              }}
              style={styles.ImageBackground_0_605}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5df/753c/7381182cd4a37f873f5e717f0c3a67ba"
              }}
              style={styles.ImageBackground_0_604}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d14f/6cf1/70d781f35a2e6cf7175a576dc0a39c36"
              }}
              style={styles.ImageBackground_0_606}
            />
          </View>
          <View style={styles.View_0_607}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bcfd/e552/b83265c0e1d41ac3a888f58489bbffad"
              }}
              style={styles.ImageBackground_0_609}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5df/753c/7381182cd4a37f873f5e717f0c3a67ba"
              }}
              style={styles.ImageBackground_0_608}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/795c/86fc/a8c38a84a467d445ef089a7fa1b7edca"
              }}
              style={styles.ImageBackground_0_610}
            />
          </View>
          <View style={styles.View_0_611}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/aa9b/8b15/269c4176621f83f792055dcfbd26c1a8"
              }}
              style={styles.ImageBackground_0_613}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5df/753c/7381182cd4a37f873f5e717f0c3a67ba"
              }}
              style={styles.ImageBackground_0_612}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3204/6537/1e4374cfd7088317d07f854dc395a64b"
              }}
              style={styles.ImageBackground_0_614}
            />
          </View>
          <View style={styles.View_0_615}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a96c/6671/f3067c128fd18de6536144e961557417"
              }}
              style={styles.ImageBackground_0_617}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a5df/753c/7381182cd4a37f873f5e717f0c3a67ba"
              }}
              style={styles.ImageBackground_0_616}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3bfb/a645/f60716c93f23a31bc5552e83d8248d19"
              }}
              style={styles.ImageBackground_0_618}
            />
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/65e4/d60c/ccfac298ee259723c11b1282fc8ce68f"
          }}
          style={styles.ImageBackground_0_619}
        />
        <View style={styles.View_0_625}>
          <View style={styles.View_0_626}>
            <Text style={styles.Text_0_626}>Details</Text>
          </View>
          <View style={styles.View_0_627}>
            <Text style={styles.Text_0_627}>
              I have been working in this position for over 10 years! I have
              created many design solutions and I think my main best quality is
              creativity. If you liked my work, please contact me and see the
              professionalism and quality of my services.
            </Text>
          </View>
        </View>
        <View style={styles.View_0_628}>
          <Text style={styles.Text_0_628}>Read more</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_0_588: {
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
  View_0_590: {
    width: wp("50.4%"),
    minWidth: wp("50.4%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.8%"),
    top: hp("4.098360655737705%")
  },
  Text_0_590: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.37500011920928955,
    textTransform: "none"
  },
  View_0_591: {
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
  View_0_592: {
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
  View_0_593: {
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
  View_0_594: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("91.2568306010929%"),
    minHeight: hp("91.2568306010929%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("14.207650273224044%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_595: {
    width: wp("26.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("0%")
  },
  Text_0_595: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_596: {
    width: wp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606557%")
  },
  Text_0_596: {
    color: "rgba(97, 97, 115, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_0_597: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("17.213114754098363%")
  },
  View_0_598: {
    width: wp("66.4%"),
    minWidth: wp("66.4%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_599: {
    width: wp("66.4%"),
    minWidth: wp("66.4%"),
    height: hp("34.69945355191257%"),
    minHeight: hp("34.69945355191257%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_601: {
    width: wp("66.4%"),
    height: hp("34.69945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_600: {
    width: wp("66.4%"),
    height: hp("34.69945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_602: {
    width: wp("66.4%"),
    height: hp("34.69945355191257%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_603: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.8%"),
    top: hp("26.91256830601093%")
  },
  ImageBackground_0_605: {
    width: wp("15.2%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_604: {
    width: wp("15.2%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_606: {
    width: wp("15.2%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_607: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.8%"),
    top: hp("18.0327868852459%")
  },
  ImageBackground_0_609: {
    width: wp("15.2%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_608: {
    width: wp("15.2%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_610: {
    width: wp("15.2%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_611: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.8%"),
    top: hp("0%")
  },
  ImageBackground_0_613: {
    width: wp("15.2%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_612: {
    width: wp("15.2%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_614: {
    width: wp("15.2%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_615: {
    width: wp("15.2%"),
    minWidth: wp("15.2%"),
    height: hp("7.786885245901639%"),
    minHeight: hp("7.786885245901639%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68.8%"),
    top: hp("9.016393442622952%")
  },
  ImageBackground_0_617: {
    width: wp("15.2%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_616: {
    width: wp("15.2%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_618: {
    width: wp("15.2%"),
    height: hp("7.786885245901639%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_619: {
    width: wp("30.4%"),
    height: hp("2.3224043715846996%"),
    top: hp("54.37158469945355%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_625: {
    width: wp("84%"),
    height: hp("22.540983606557376%"),
    top: hp("64.48087431693989%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_626: {
    width: wp("21.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_626: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_627: {
    width: wp("84%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("6.147540983606561%")
  },
  Text_0_627: {
    color: "rgba(97, 97, 115, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.3499999940395355,
    textTransform: "none"
  },
  View_0_628: {
    width: wp("22.400000000000002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("88.66120218579236%")
  },
  Text_0_628: {
    color: "rgba(255, 177, 157, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
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
