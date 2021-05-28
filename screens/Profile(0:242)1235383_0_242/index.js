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
      <View style={styles.View_0_243} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/88d4/1dec/1beaf22f38c9bf2d72198dbb7fd6dd26"
        }}
        style={styles.ImageBackground_0_244}
      />
      <View style={styles.View_0_246}>
        <View style={styles.View_0_247} />
        <View style={styles.View_0_248} />
      </View>
      <View style={styles.View_0_249}>
        <View style={styles.View_0_250}>
          <Text style={styles.Text_0_250}>Jeremías del Pozo</Text>
        </View>
        <View style={styles.View_0_251}>
          <View style={styles.View_0_252}>
            <Text style={styles.Text_0_252}>New York</Text>
          </View>
          <View style={styles.View_0_253}>
            <Text style={styles.Text_0_253}>ID: 1120611</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/159c/49fb/9b451ed935eb7aa2a613dbf1c693bd4e"
            }}
            style={styles.ImageBackground_0_254}
          />
        </View>
        <View style={styles.View_0_255}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a49b/53f5/3f2c0ff84e3108980f054f0f920e4d19"
            }}
            style={styles.ImageBackground_0_257}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f304/439b/ea8ecd179ab12ae95272826568b66a66"
            }}
            style={styles.ImageBackground_0_256}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/da69/e27f/80c4e7422cb0156cca5afb1ae476cb3f"
            }}
            style={styles.ImageBackground_0_258}
          />
        </View>
      </View>
      <View style={styles.View_0_259}>
        <Text style={styles.Text_0_259}>Edit</Text>
      </View>
      <View style={styles.View_0_260}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/af2e/0e1b/4924c4fa33404b88748c18ae0b756bb3"
          }}
          style={styles.ImageBackground_0_261}
        />
        <View style={styles.View_0_262}>
          <Text style={styles.Text_0_262}>About Me</Text>
        </View>
      </View>
      <View style={styles.View_0_263}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/531a/5cc8/8752d4b8fa9886639bfb0599ef79f0b5"
          }}
          style={styles.ImageBackground_0_264}
        />
        <View style={styles.View_0_265}>
          <Text style={styles.Text_0_265}>Reviews</Text>
        </View>
      </View>
      <View style={styles.View_0_266}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3e3/7d48/c8a9ac92caace8f4b8acd4e63bdd7f11"
          }}
          style={styles.ImageBackground_0_267}
        />
        <View style={styles.View_0_268}>
          <View style={styles.View_0_269}>
            <Text style={styles.Text_0_269}>Phone number</Text>
          </View>
          <View style={styles.View_0_270}>
            <Text style={styles.Text_0_270}>+3746589923</Text>
          </View>
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b37d/e641/72e0503573ad16d353527959b20d9f75"
          }}
          style={styles.ImageBackground_0_271}
        />
        <View style={styles.View_0_273} />
      </View>
      <View style={styles.View_0_274}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3e3/7d48/c8a9ac92caace8f4b8acd4e63bdd7f11"
          }}
          style={styles.ImageBackground_0_275}
        />
        <View style={styles.View_0_276}>
          <View style={styles.View_0_277}>
            <Text style={styles.Text_0_277}>Email</Text>
          </View>
          <View style={styles.View_0_278}>
            <Text style={styles.Text_0_278}>conrad@gmail.com</Text>
          </View>
        </View>
        <View style={styles.View_0_279} />
        <View style={styles.View_0_280}>
          <View style={styles.View_0_281}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/cfdc/18ed/3a188ec8badb8b5677b4358e66fcec3e"
              }}
              style={styles.ImageBackground_0_282}
            />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5b1c/1823/370ee414db46535f68516ffcd2a3676c"
              }}
              style={styles.ImageBackground_0_285}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_287}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d3e3/7d48/c8a9ac92caace8f4b8acd4e63bdd7f11"
          }}
          style={styles.ImageBackground_0_288}
        />
        <View style={styles.View_0_289}>
          <View style={styles.View_0_290}>
            <View style={styles.View_0_291}>
              <Text style={styles.Text_0_291}>Completed projects</Text>
            </View>
            <View style={styles.View_0_292}>
              <Text style={styles.Text_0_292}>248</Text>
            </View>
          </View>
          <View style={styles.View_0_293} />
        </View>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8b42/f049/1c21f39635df7c517787369ddfc5c9fa"
          }}
          style={styles.ImageBackground_0_294}
        />
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_0_243: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("48.08743169398907%"),
    minHeight: hp("48.08743169398907%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("62.841530054644814%"),
    backgroundColor: "rgba(82, 84, 100, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_244: {
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
  View_0_246: {
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
  View_0_247: {
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
  View_0_248: {
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
  View_0_249: {
    width: wp("54.13333333333333%"),
    minWidth: wp("54.13333333333333%"),
    height: hp("26.775956284153008%"),
    minHeight: hp("26.775956284153008%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.933333333333334%"),
    top: hp("14.207650273224044%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_250: {
    width: wp("53.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.26666666666666927%"),
    top: hp("19.125683060109285%")
  },
  Text_0_250: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 19,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_251: {
    width: wp("47.733333333333334%"),
    height: hp("3.0054644808743167%"),
    top: hp("23.770491803278684%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.0666666666666664%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_252: {
    width: wp("18.666666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_252: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_253: {
    width: wp("20.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.46666666666666%"),
    top: hp("0%")
  },
  Text_0_253: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  ImageBackground_0_254: {
    width: wp("1.3333333333333335%"),
    height: hp("0.6830601092896175%"),
    top: hp("1.2295081967213122%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("22.4%")
  },
  View_0_255: {
    width: wp("30.4%"),
    minWidth: wp("30.4%"),
    height: hp("15.573770491803279%"),
    minHeight: hp("15.573770491803279%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.866666666666664%"),
    top: hp("0%")
  },
  ImageBackground_0_257: {
    width: wp("30.4%"),
    height: hp("15.573770491803279%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_256: {
    width: wp("30.4%"),
    height: hp("15.573770491803279%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_258: {
    width: wp("30.4%"),
    height: hp("15.573770491803279%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_259: {
    width: wp("8%"),
    minWidth: wp("8%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("46.13333333333333%"),
    top: hp("43.30601092896175%")
  },
  Text_0_259: {
    color: "rgba(255, 177, 157, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_260: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("49.18032786885246%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_261: {
    width: wp("40%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_262: {
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.133333333333333%"),
    top: hp("2.868852459016388%")
  },
  Text_0_262: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_0_263: {
    width: wp("40%"),
    minWidth: wp("40%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("52%"),
    top: hp("49.18032786885246%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_264: {
    width: wp("40%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_265: {
    width: wp("16.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("11.733333333333334%"),
    top: hp("2.868852459016388%")
  },
  Text_0_265: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_0_266: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("68.30601092896174%")
  },
  ImageBackground_0_267: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_268: {
    width: wp("26.13333333333333%"),
    minWidth: wp("26.13333333333333%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.33333333333333%"),
    top: hp("2.4590163934426386%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_269: {
    width: wp("25.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_269: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.29166677594184875,
    textTransform: "none"
  },
  View_0_270: {
    width: wp("26.13333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%")
  },
  Text_0_270: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  ImageBackground_0_271: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.459016393442623%"),
    minHeight: hp("2.459016393442623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("4.234972677595636%")
  },
  View_0_273: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.200000000000003%"),
    top: hp("2.5956284153005527%"),
    backgroundColor: "rgba(236, 236, 235, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_274: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("81.4207650273224%")
  },
  ImageBackground_0_275: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_276: {
    width: wp("39.2%"),
    minWidth: wp("39.2%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.33333333333333%"),
    top: hp("2.4590163934426243%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_277: {
    width: wp("9.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_277: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.29166677594184875,
    textTransform: "none"
  },
  View_0_278: {
    width: wp("38.93333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.005464480874309%")
  },
  Text_0_278: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_279: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.200000000000003%"),
    top: hp("2.5956284153005527%"),
    backgroundColor: "rgba(236, 236, 235, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_280: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%"),
    top: hp("4.37158469945355%")
  },
  View_0_281: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("2.3224043715846996%"),
    minHeight: hp("2.3224043715846996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_282: {
    width: wp("5.415934753417969%"),
    minWidth: wp("5.415934753417969%"),
    height: hp("1.345128570098043%"),
    minHeight: hp("1.345128570098043%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.20032552083333321%"),
    top: hp("0%")
  },
  ImageBackground_0_285: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("2.0891642961345736%"),
    minHeight: hp("2.0891642961345736%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.10995500074709241%")
  },
  View_0_287: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("94.53551912568307%")
  },
  ImageBackground_0_288: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_289: {
    width: wp("41.6%"),
    minWidth: wp("41.6%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.200000000000003%"),
    top: hp("2.45901639344261%")
  },
  View_0_290: {
    width: wp("35.46666666666667%"),
    minWidth: wp("35.46666666666667%"),
    height: hp("6.0109289617486334%"),
    minHeight: hp("6.0109289617486334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.133333333333326%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_291: {
    width: wp("35.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_291: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.29166677594184875,
    textTransform: "none"
  },
  View_0_292: {
    width: wp("7.466666666666668%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.0054644808743234%")
  },
  Text_0_292: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_293: {
    width: wp("0.26666666666666666%"),
    minWidth: wp("0.26666666666666666%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0.1366120218579283%"),
    backgroundColor: "rgba(236, 236, 235, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_294: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%"),
    top: hp("3.961748633879779%")
  }
})

const mapStateToProps = state => {
  return {}
}
const mapDispatchToProps = () => {
  return {}
}
export default connect(mapStateToProps, mapDispatchToProps)(Blank)
