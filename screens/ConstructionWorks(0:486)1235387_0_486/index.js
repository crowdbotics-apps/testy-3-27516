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
        style={styles.ImageBackground_0_487}
      />
      <View style={styles.View_0_489}>
        <Text style={styles.Text_0_489}>Construction works</Text>
      </View>
      <View style={styles.View_0_490}>
        <View style={styles.View_0_491} />
        <View style={styles.View_0_492} />
      </View>
      <View style={styles.View_0_493}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/129f/7337/be953e504ca99d7e75e52f5bccf8e9ae"
          }}
          style={styles.ImageBackground_0_494}
        />
        <View style={styles.View_0_495}>
          <Text style={styles.Text_0_495}>Search by category</Text>
        </View>
        <View style={styles.View_0_496}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8379/af1a/c434e7b268756440a246391ad7a17e9f"
            }}
            style={styles.ImageBackground_0_499}
          />
        </View>
      </View>
      <View style={styles.View_0_500}>
        <View style={styles.View_0_501}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50dd/b636/811702ad199b2808e53d3333d6dd7d8f"
            }}
            style={styles.ImageBackground_0_502}
          />
          <View style={styles.View_0_503}>
            <Text style={styles.Text_0_503}>Welding works</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d21/92b5/08efd658e61d49a3c036cb471f52112b"
            }}
            style={styles.ImageBackground_0_504}
          />
          <View style={styles.View_0_505}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c0e/c21d/c9e287be5d0464963b11a0af3f7b4eca"
              }}
              style={styles.ImageBackground_0_506}
            />
          </View>
        </View>
        <View style={styles.View_0_508}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50dd/b636/811702ad199b2808e53d3333d6dd7d8f"
            }}
            style={styles.ImageBackground_0_509}
          />
          <View style={styles.View_0_510}>
            <Text style={styles.Text_0_510}>Foundation works</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d21/92b5/08efd658e61d49a3c036cb471f52112b"
            }}
            style={styles.ImageBackground_0_511}
          />
          <View style={styles.View_0_512}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c0e/c21d/c9e287be5d0464963b11a0af3f7b4eca"
              }}
              style={styles.ImageBackground_0_513}
            />
          </View>
        </View>
        <View style={styles.View_0_515}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b171/aa74/f95169445de6f5bc7bf58aa5bae723b3"
            }}
            style={styles.ImageBackground_0_516}
          />
          <View style={styles.View_0_517}>
            <Text style={styles.Text_0_517}>Roofing</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7fa/85cb/4091389b0dcfa9e0b13b8224e50a81b1"
            }}
            style={styles.ImageBackground_0_518}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7fa/85cb/4091389b0dcfa9e0b13b8224e50a81b1"
            }}
            style={styles.ImageBackground_0_519}
          />
          <View style={styles.View_0_522}>
            <View style={styles.View_0_520} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a72/7247/fa39f67d9b0a6c21b194adc0a4f910ec"
              }}
              style={styles.ImageBackground_0_521}
            />
          </View>
        </View>
        <View style={styles.View_0_523}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/50dd/b636/811702ad199b2808e53d3333d6dd7d8f"
            }}
            style={styles.ImageBackground_0_524}
          />
          <View style={styles.View_0_525}>
            <Text style={styles.Text_0_525}>Waterproofing</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0d21/92b5/08efd658e61d49a3c036cb471f52112b"
            }}
            style={styles.ImageBackground_0_526}
          />
          <View style={styles.View_0_527}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5c0e/c21d/c9e287be5d0464963b11a0af3f7b4eca"
              }}
              style={styles.ImageBackground_0_528}
            />
          </View>
        </View>
        <View style={styles.View_0_530}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b171/aa74/f95169445de6f5bc7bf58aa5bae723b3"
            }}
            style={styles.ImageBackground_0_531}
          />
          <View style={styles.View_0_532}>
            <Text style={styles.Text_0_532}>Architecture</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7fa/85cb/4091389b0dcfa9e0b13b8224e50a81b1"
            }}
            style={styles.ImageBackground_0_533}
          />
          <View style={styles.View_0_536}>
            <View style={styles.View_0_534} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a72/7247/fa39f67d9b0a6c21b194adc0a4f910ec"
              }}
              style={styles.ImageBackground_0_535}
            />
          </View>
        </View>
        <View style={styles.View_0_537}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/b171/aa74/f95169445de6f5bc7bf58aa5bae723b3"
            }}
            style={styles.ImageBackground_0_538}
          />
          <View style={styles.View_0_539}>
            <Text style={styles.Text_0_539}>Design</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/f7fa/85cb/4091389b0dcfa9e0b13b8224e50a81b1"
            }}
            style={styles.ImageBackground_0_540}
          />
          <View style={styles.View_0_543}>
            <View style={styles.View_0_541} />
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0a72/7247/fa39f67d9b0a6c21b194adc0a4f910ec"
              }}
              style={styles.ImageBackground_0_542}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_544}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2e4/1c8b/87ffc95bcfdb3aeb7f1d362bfd2faf62"
          }}
          style={styles.ImageBackground_0_545}
        />
        <View style={styles.View_0_546}>
          <Text style={styles.Text_0_546}>Skip</Text>
        </View>
      </View>
      <View style={styles.View_0_547}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/531a/5cc8/8752d4b8fa9886639bfb0599ef79f0b5"
          }}
          style={styles.ImageBackground_0_548}
        />
        <View style={styles.View_0_549}>
          <Text style={styles.Text_0_549}>Done</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_0_487: {
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
  View_0_489: {
    width: wp("44.53333333333334%"),
    minWidth: wp("44.53333333333334%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.73333333333333%"),
    top: hp("4.098360655737705%")
  },
  Text_0_489: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.37500011920928955,
    textTransform: "none"
  },
  View_0_490: {
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
  View_0_491: {
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
  View_0_492: {
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
  View_0_493: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("14.207650273224044%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_494: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_495: {
    width: wp("40.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333336%"),
    top: hp("2.8688524590163915%")
  },
  Text_0_495: {
    color: "rgba(176, 176, 195, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_0_496: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    minHeight: hp("2.185792349726776%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.866666666666665%"),
    top: hp("3.0054644808743163%")
  },
  ImageBackground_0_499: {
    width: wp("4.195681762695312%"),
    height: hp("2.1831129418044792%"),
    top: hp("0.0013403553780335642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.0354817708333357%")
  },
  View_0_500: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("60.10928961748634%"),
    minHeight: hp("60.10928961748634%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("28.142076502732237%")
  },
  View_0_501: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_502: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_503: {
    width: wp("29.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("2.595628415300549%")
  },
  Text_0_503: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  ImageBackground_0_504: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_0_505: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.86666666666666%"),
    top: hp("3.2786885245901694%")
  },
  ImageBackground_0_506: {
    width: wp("4.266666666666667%"),
    height: hp("1.639344262295082%"),
    top: hp("0.02112466780865674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_508: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("10.38251366120219%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_509: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_510: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("2.5956284153005456%")
  },
  Text_0_510: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  ImageBackground_0_511: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_0_512: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.86666666666666%"),
    top: hp("3.278688524590166%")
  },
  ImageBackground_0_513: {
    width: wp("4.266666666666667%"),
    height: hp("1.639344262295082%"),
    top: hp("0.02112466780865674%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_515: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("20.76502732240437%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_516: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_517: {
    width: wp("15.466666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("2.5956284153005456%")
  },
  Text_0_517: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  ImageBackground_0_518: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  ImageBackground_0_519: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_0_522: {
    width: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333334%")
  },
  View_0_520: {
    width: wp("0.5599999745686849%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5866536458333371%"),
    backgroundColor: "rgba(129, 129, 129, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_521: {
    width: wp("3.733333333333334%"),
    height: hp("0.2868852328733017%"),
    top: hp("0.8128431976818717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_523: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("31.14754098360656%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_524: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_525: {
    width: wp("29.86666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("2.5956284153005456%")
  },
  Text_0_525: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  ImageBackground_0_526: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_0_527: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("1.7759562841530054%"),
    minHeight: hp("1.7759562841530054%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("73.86666666666666%"),
    top: hp("3.278688524590166%")
  },
  ImageBackground_0_528: {
    width: wp("4.266666666666667%"),
    height: hp("1.639344262295082%"),
    top: hp("0.021120498740600624%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_530: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("41.53005464480874%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_531: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_532: {
    width: wp("25.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("2.5956284153005527%")
  },
  Text_0_532: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  ImageBackground_0_533: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_0_536: {
    width: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    top: hp("3.1420765027322375%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333334%")
  },
  View_0_534: {
    width: wp("0.5599999745686849%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5866536458333371%"),
    backgroundColor: "rgba(129, 129, 129, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_535: {
    width: wp("3.733333333333334%"),
    height: hp("0.2868852328733017%"),
    top: hp("0.8128431976818717%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_537: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("8.19672131147541%"),
    minHeight: hp("8.19672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("51.912568306010925%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_538: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_539: {
    width: wp("14.133333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("2.5956284153005527%")
  },
  Text_0_539: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  ImageBackground_0_540: {
    width: wp("16%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("68%")
  },
  View_0_543: {
    width: wp("3.733333333333334%"),
    height: hp("1.912568306010929%"),
    top: hp("3.1420765027322517%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("74.13333333333334%")
  },
  View_0_541: {
    width: wp("0.5599999745686849%"),
    height: hp("1.912568306010929%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.5866536458333371%"),
    backgroundColor: "rgba(129, 129, 129, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_542: {
    width: wp("3.733333333333334%"),
    height: hp("0.2868852328733017%"),
    top: hp("0.8128431976818575%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_544: {
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
  ImageBackground_0_545: {
    width: wp("40%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_546: {
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.733333333333334%"),
    top: hp("2.868852459016395%")
  },
  Text_0_546: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_0_547: {
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
  ImageBackground_0_548: {
    width: wp("40%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_549: {
    width: wp("10.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.666666666666657%"),
    top: hp("2.868852459016395%")
  },
  Text_0_549: {
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
