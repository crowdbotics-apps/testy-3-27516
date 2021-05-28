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
      <View style={styles.View_0_432}>
        <Text style={styles.Text_0_432}>Orders in progress</Text>
      </View>
      <View style={styles.View_0_433}>
        <View style={styles.View_0_434} />
        <View style={styles.View_0_435} />
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88d4/1dec/1beaf22f38c9bf2d72198dbb7fd6dd26"
        }}
        style={styles.ImageBackground_0_436}
      />
      <View style={styles.View_0_438}>
        <View style={styles.View_0_439}>
          <View style={styles.View_0_440}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cce0/e392/924d0f441a7635d4b385645722db7a4d"
              }}
              style={styles.ImageBackground_0_442}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9659/65e4/94803430a5930b323c23c5e6901c29ee"
              }}
              style={styles.ImageBackground_0_441}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/00d8/74e1/819723a4d140dd558095a6320b754a6f"
              }}
              style={styles.ImageBackground_0_443}
            />
          </View>
          <View style={styles.View_0_444}>
            <Text style={styles.Text_0_444}>Balcony repair</Text>
          </View>
          <View style={styles.View_0_445}>
            <Text style={styles.Text_0_445}>$24</Text>
          </View>
        </View>
        <View style={styles.View_0_446}>
          <View style={styles.View_0_447}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/deb8/03b6/1f3ce5fe4482574e2cb387180c0c352a"
              }}
              style={styles.ImageBackground_0_449}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92c0/7aa5/fca5bcc61f41aa35576cb1c76b0df2c0"
              }}
              style={styles.ImageBackground_0_448}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c592/1257/c15f11dd0cb38f9828d55192c95b38fa"
              }}
              style={styles.ImageBackground_0_450}
            />
          </View>
          <View style={styles.View_0_451}>
            <Text style={styles.Text_0_451}>Redecorating</Text>
          </View>
          <View style={styles.View_0_452}>
            <Text style={styles.Text_0_452}>$60</Text>
          </View>
        </View>
        <View style={styles.View_0_453}>
          <View style={styles.View_0_454}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a772/b24f/a87c0306bbbec5b77067227e18b39c89"
              }}
              style={styles.ImageBackground_0_456}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/4882/baa7/c5d43b7140594373f2df8827f3affb50"
              }}
              style={styles.ImageBackground_0_455}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/746d/5879/3873575e86ffdb3ee0ddd651533932d0"
              }}
              style={styles.ImageBackground_0_457}
            />
          </View>
          <View style={styles.View_0_458}>
            <Text style={styles.Text_0_458}>Painting works</Text>
          </View>
          <View style={styles.View_0_459}>
            <Text style={styles.Text_0_459}>$42</Text>
          </View>
        </View>
        <View style={styles.View_0_460}>
          <View style={styles.View_0_461}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cce0/e392/924d0f441a7635d4b385645722db7a4d"
              }}
              style={styles.ImageBackground_0_463}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9659/65e4/94803430a5930b323c23c5e6901c29ee"
              }}
              style={styles.ImageBackground_0_462}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2cd9/a397/290633cb20b8eb1f3b8ad912d2c4bf9f"
              }}
              style={styles.ImageBackground_0_464}
            />
          </View>
          <View style={styles.View_0_465}>
            <Text style={styles.Text_0_465}>Interior design</Text>
          </View>
          <View style={styles.View_0_466}>
            <Text style={styles.Text_0_466}>$54</Text>
          </View>
        </View>
        <View style={styles.View_0_467}>
          <View style={styles.View_0_468}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/deb8/03b6/1f3ce5fe4482574e2cb387180c0c352a"
              }}
              style={styles.ImageBackground_0_470}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/92c0/7aa5/fca5bcc61f41aa35576cb1c76b0df2c0"
              }}
              style={styles.ImageBackground_0_469}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/e78a/445a/12c429e68fbf881f0855f602ad0b6b2d"
              }}
              style={styles.ImageBackground_0_471}
            />
          </View>
          <View style={styles.View_0_472}>
            <Text style={styles.Text_0_472}>Redecorating</Text>
          </View>
          <View style={styles.View_0_473}>
            <Text style={styles.Text_0_473}>$19</Text>
          </View>
        </View>
        <View style={styles.View_0_474}>
          <View style={styles.View_0_475}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cce0/e392/924d0f441a7635d4b385645722db7a4d"
              }}
              style={styles.ImageBackground_0_477}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9659/65e4/94803430a5930b323c23c5e6901c29ee"
              }}
              style={styles.ImageBackground_0_476}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c261/e562/026259eda05426fa03600af53093dafd"
              }}
              style={styles.ImageBackground_0_478}
            />
          </View>
        </View>
      </View>
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5f5f/d1fe/74d51c13e580812ac64bddd53f3dee0a"
        }}
        style={styles.ImageBackground_0_479}
      />
      <View style={styles.View_0_480}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2e4/1c8b/87ffc95bcfdb3aeb7f1d362bfd2faf62"
          }}
          style={styles.ImageBackground_0_481}
        />
        <View style={styles.View_0_482}>
          <Text style={styles.Text_0_482}>Archive</Text>
        </View>
      </View>
      <View style={styles.View_0_483}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/531a/5cc8/8752d4b8fa9886639bfb0599ef79f0b5"
          }}
          style={styles.ImageBackground_0_484}
        />
        <View style={styles.View_0_485}>
          <Text style={styles.Text_0_485}>In work</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_0_432: {
    width: wp("42.13333333333333%"),
    minWidth: wp("42.13333333333333%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.06666666666667%"),
    top: hp("4.098360655737705%")
  },
  Text_0_432: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.37500011920928955,
    textTransform: "none"
  },
  View_0_433: {
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
  View_0_434: {
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
  View_0_435: {
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
  ImageBackground_0_436: {
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
  View_0_438: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("89.89071038251366%"),
    minHeight: hp("89.89071038251366%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("16.256830601092894%")
  },
  View_0_439: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("34.56284153005464%"),
    minHeight: hp("34.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_440: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("26.775956284153008%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_442: {
    width: wp("40%"),
    height: hp("26.740360781143274%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_441: {
    width: wp("40%"),
    height: hp("26.740360781143274%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_443: {
    width: wp("40%"),
    height: hp("26.740360781143274%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_444: {
    width: wp("29.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666665%"),
    top: hp("28.142076502732245%")
  },
  Text_0_444: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_445: {
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.8%"),
    top: hp("30.73770491803279%")
  },
  Text_0_445: {
    color: "rgba(176, 176, 195, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.29166680574417114,
    textTransform: "none"
  },
  View_0_446: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("24.453551912568305%"),
    minHeight: hp("24.453551912568305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_447: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_449: {
    width: wp("40%"),
    height: hp("16.666666666666664%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_448: {
    width: wp("40%"),
    height: hp("16.666666666666664%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_450: {
    width: wp("40%"),
    height: hp("16.666666666666664%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_451: {
    width: wp("27.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.13333333333334%"),
    top: hp("18.032786885245905%")
  },
  Text_0_451: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_452: {
    width: wp("6.666666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.799999999999997%"),
    top: hp("20.62841530054645%")
  },
  Text_0_452: {
    color: "rgba(176, 176, 195, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.29166680574417114,
    textTransform: "none"
  },
  View_0_453: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("24.18032786885246%"),
    minHeight: hp("24.18032786885246%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("36.612021857923494%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_454: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("16.39344262295082%"),
    minHeight: hp("16.39344262295082%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_456: {
    width: wp("40%"),
    height: hp("16.39344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_455: {
    width: wp("40%"),
    height: hp("16.39344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_457: {
    width: wp("40%"),
    height: hp("16.39344262295082%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_458: {
    width: wp("29.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.066666666666665%"),
    top: hp("17.759562841530048%")
  },
  Text_0_458: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_459: {
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.066666666666666%"),
    top: hp("20.355191256830615%")
  },
  Text_0_459: {
    color: "rgba(176, 176, 195, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.29166680574417114,
    textTransform: "none"
  },
  View_0_460: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("34.56284153005464%"),
    minHeight: hp("34.56284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("26.50273224043716%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_461: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("26.775956284153008%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_463: {
    width: wp("40%"),
    height: hp("26.740360781143274%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_462: {
    width: wp("40%"),
    height: hp("26.740360781143274%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_464: {
    width: wp("40%"),
    height: hp("26.740360781143274%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_465: {
    width: wp("29.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333336%"),
    top: hp("28.142076502732237%")
  },
  Text_0_465: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_466: {
    width: wp("6.666666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.799999999999997%"),
    top: hp("30.73770491803279%")
  },
  Text_0_466: {
    color: "rgba(176, 176, 195, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.29166680574417114,
    textTransform: "none"
  },
  View_0_467: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("24.453551912568305%"),
    minHeight: hp("24.453551912568305%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("63.11475409836067%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_468: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("16.666666666666664%"),
    minHeight: hp("16.666666666666664%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_470: {
    width: wp("40%"),
    height: hp("16.666666666666664%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_469: {
    width: wp("40%"),
    height: hp("16.666666666666664%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_471: {
    width: wp("40%"),
    height: hp("16.666666666666664%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_472: {
    width: wp("27.73333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333335%"),
    top: hp("18.032786885245898%")
  },
  Text_0_472: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_473: {
    width: wp("5.6000000000000005%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("17.333333333333336%"),
    top: hp("20.628415300546436%")
  },
  Text_0_473: {
    color: "rgba(176, 176, 195, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.29166680574417114,
    textTransform: "none"
  },
  View_0_474: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("26.775956284153008%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("44%"),
    top: hp("63.11475409836067%")
  },
  View_0_475: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("26.775956284153008%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_477: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("26.740360781143274%"),
    minHeight: hp("26.740360781143274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_476: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("26.740360781143274%"),
    minHeight: hp("26.740360781143274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_478: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("26.740360781143274%"),
    minHeight: hp("26.740360781143274%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_479: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("22.833681367134137%"),
    minHeight: hp("22.833681367134137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("88.11475409836066%")
  },
  View_0_480: {
    width: wp("40%"),
    minWidth: wp("40%"),
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
  ImageBackground_0_481: {
    width: wp("40%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_482: {
    width: wp("15.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.533333333333335%"),
    top: hp("2.868852459016395%")
  },
  Text_0_482: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_0_483: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("97.26775956284153%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_484: {
    width: wp("40%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_485: {
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.799999999999997%"),
    top: hp("2.868852459016395%")
  },
  Text_0_485: {
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
