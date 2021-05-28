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
      <View style={styles.View_0_297} />
      <ImageBackground
        source={{
          uri:
            "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/93a0/9356/4858e53a934d90248adb570a8395309f"
        }}
        style={styles.ImageBackground_0_298}
      />
      <View style={styles.View_0_300}>
        <View style={styles.View_0_301}>
          <View style={styles.View_0_302} />
          <View style={styles.View_0_303}>
            <Text style={styles.Text_0_303}>Home</Text>
          </View>
          <View style={styles.View_0_304}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c20a/74ba/8107e4a4a2ea02426da164fec0bdf013"
              }}
              style={styles.ImageBackground_0_307}
            />
          </View>
        </View>
        <View style={styles.View_0_308}>
          <View style={styles.View_0_309} />
          <View style={styles.View_0_310}>
            <Text style={styles.Text_0_310}>Settings</Text>
          </View>
          <View style={styles.View_0_311}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/62c2/3636/f3a68d3cf581e8fbe616cf492a2436a4"
              }}
              style={styles.ImageBackground_0_314}
            />
          </View>
        </View>
        <View style={styles.View_0_316}>
          <View style={styles.View_0_317} />
          <View style={styles.View_0_318}>
            <Text style={styles.Text_0_318}>Profile</Text>
          </View>
          <View style={styles.View_0_319}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7fb2/f0f6/6022c57a3af6faffdc572bf90dcf9772"
              }}
              style={styles.ImageBackground_0_320}
            />
          </View>
        </View>
        <View style={styles.View_0_323}>
          <View style={styles.View_0_324} />
          <View style={styles.View_0_325}>
            <Text style={styles.Text_0_325}>Messages</Text>
          </View>
          <View style={styles.View_0_326}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/94ed/3e08/66763c2946a095d0ceba334c8303da28"
              }}
              style={styles.ImageBackground_0_329}
            />
          </View>
        </View>
      </View>
      <View style={styles.View_0_332}>
        <View style={styles.View_0_333} />
        <View style={styles.View_0_334}>
          <View style={styles.View_0_335}>
            <View style={styles.View_0_336} />
            <View style={styles.View_0_337} />
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a850/350c/acf8ec27d485b770df96d5484add1612"
            }}
            style={styles.ImageBackground_0_338}
          />
          <View style={styles.View_0_340}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7b45/2027/050f2b2e614e33c82e137f3d2b2ddb8b"
              }}
              style={styles.ImageBackground_0_341}
            />
            <View style={styles.View_0_342}>
              <Text style={styles.Text_0_342}>Reviews</Text>
            </View>
          </View>
          <View style={styles.View_0_343} />
          <View style={styles.View_0_344}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/325e/6c7c/a45ec921ac68829c0cbf14a3ec3f2536"
              }}
              style={styles.ImageBackground_0_345}
            />
            <View style={styles.View_0_346}>
              <Text style={styles.Text_0_346}>About Me</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/545b/4e93/93857cb2628b86d53a6223587cdd015d"
            }}
            style={styles.ImageBackground_0_347}
          />
          <View style={styles.View_0_348}>
            <View style={styles.View_0_349}>
              <Text style={styles.Text_0_349}>Phone number</Text>
            </View>
            <View style={styles.View_0_350}>
              <Text style={styles.Text_0_350}>+3746589923</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/84e5/da50/44839a9c9bd4fe156df1426de6c34c19"
            }}
            style={styles.ImageBackground_0_351}
          />
          <View style={styles.View_0_353} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/545b/4e93/93857cb2628b86d53a6223587cdd015d"
            }}
            style={styles.ImageBackground_0_354}
          />
          <View style={styles.View_0_355}>
            <View style={styles.View_0_356}>
              <Text style={styles.Text_0_356}>Email</Text>
            </View>
            <View style={styles.View_0_357}>
              <Text style={styles.Text_0_357}>conrad@gmail.com</Text>
            </View>
          </View>
          <View style={styles.View_0_358} />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/545b/4e93/93857cb2628b86d53a6223587cdd015d"
            }}
            style={styles.ImageBackground_0_359}
          />
          <View style={styles.View_0_360}>
            <View style={styles.View_0_361}>
              <View style={styles.View_0_362}>
                <Text style={styles.Text_0_362}>Completed projects</Text>
              </View>
              <View style={styles.View_0_363}>
                <Text style={styles.Text_0_363}>248</Text>
              </View>
            </View>
            <View style={styles.View_0_364} />
          </View>
          <View style={styles.View_0_365}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ead0/3c35/1fc01c761d6349ff64ec7251ae2cca16"
              }}
              style={styles.ImageBackground_0_368}
            />
            <View style={styles.View_0_369}>
              <View style={styles.View_0_370}>
                <View style={styles.View_0_371}>
                  <View style={styles.View_0_372} />
                </View>
              </View>
            </View>
          </View>
          <View style={styles.View_0_373}>
            <View style={styles.View_0_374}>
              <Text style={styles.Text_0_374}>Jeremías del Pozo</Text>
            </View>
            <View style={styles.View_0_375}>
              <View style={styles.View_0_376}>
                <Text style={styles.Text_0_376}>New York</Text>
              </View>
              <View style={styles.View_0_377}>
                <Text style={styles.Text_0_377}>ID: 1120611</Text>
              </View>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/159c/49fb/9b451ed935eb7aa2a613dbf1c693bd4e"
                }}
                style={styles.ImageBackground_0_378}
              />
            </View>
            <View style={styles.View_0_379}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d981/6222/2a4f5965d519c32c6a18a0475a5230d7"
                }}
                style={styles.ImageBackground_0_381}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7be9/f7b1/7955c1a8c2d2dff4f5efc8c9784e0d29"
                }}
                style={styles.ImageBackground_0_380}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/63e0/caf3/d4416c59cd8ff7a4c18f7fe9a2631793"
                }}
                style={styles.ImageBackground_0_382}
              />
            </View>
          </View>
          <View style={styles.View_0_383}>
            <View style={styles.View_0_384}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5462/7fba/980b1dd6cd3af1de63eb7bc466ffee69"
                }}
                style={styles.ImageBackground_0_385}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c81c/3b58/0a8e3a29d2edd76610e8af2a603c3a4f"
                }}
                style={styles.ImageBackground_0_388}
              />
            </View>
          </View>
          <View style={styles.View_0_390}>
            <Text style={styles.Text_0_390}>Edit</Text>
          </View>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  View_0_297: {
    width: wp("100%"),
    minWidth: wp("100%"),
    height: hp("110.92896174863387%"),
    minHeight: hp("110.92896174863387%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(82, 84, 100, 1)"
  },
  ImageBackground_0_298: {
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
  View_0_300: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    height: hp("75%"),
    minHeight: hp("75%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("18.0327868852459%")
  },
  View_0_301: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333279%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_302: {
    width: wp("19.2%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(32, 195, 175, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_303: {
    width: wp("12%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.7333333333333414%"),
    top: hp("11.74863387978142%")
  },
  Text_0_303: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_304: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("2.8551912047172503%"),
    minHeight: hp("2.8551912047172503%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666675%"),
    top: hp("3.5519125683060118%")
  },
  ImageBackground_0_307: {
    width: wp("5.7995554606119795%"),
    height: hp("2.755987448770492%"),
    top: hp("0.014675119535517922%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03419596354166288%")
  },
  View_0_308: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333279%"),
    top: hp("40.43715846994536%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_309: {
    width: wp("19.2%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(50, 52, 64, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_310: {
    width: wp("16.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.3333333333333393%"),
    top: hp("11.748633879781423%")
  },
  Text_0_310: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_311: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666675%"),
    top: hp("3.415300546448087%")
  },
  ImageBackground_0_314: {
    width: wp("5.866666666666666%"),
    height: hp("3.0054644808743167%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_316: {
    width: wp("19.2%"),
    minWidth: wp("19.2%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333279%"),
    top: hp("20.218579234972676%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_317: {
    width: wp("19.2%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(50, 52, 64, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_318: {
    width: wp("12.8%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3333333333333393%"),
    top: hp("11.748633879781423%")
  },
  Text_0_318: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_319: {
    width: wp("4.8%"),
    minWidth: wp("4.8%"),
    height: hp("2.9508197242444982%"),
    minHeight: hp("2.9508197242444982%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("3.415300546448094%")
  },
  ImageBackground_0_320: {
    width: wp("4.8%"),
    height: hp("2.9508197242444982%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_323: {
    width: wp("20.266666666666666%"),
    minWidth: wp("20.266666666666666%"),
    height: hp("14.344262295081966%"),
    minHeight: hp("14.344262295081966%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("60.65573770491804%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_324: {
    width: wp("19.2%"),
    height: hp("9.836065573770492%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5333333333333279%"),
    backgroundColor: "rgba(50, 52, 64, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_325: {
    width: wp("20%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.2666666666666657%"),
    top: hp("11.748633879781423%")
  },
  Text_0_325: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_326: {
    width: wp("5.866666666666666%"),
    minWidth: wp("5.866666666666666%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.200000000000003%"),
    top: hp("3.961748633879779%")
  },
  ImageBackground_0_329: {
    width: wp("5.866666666666666%"),
    height: hp("1.934655246838846%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_332: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("97.95081967213115%"),
    minHeight: hp("97.95081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.2%"),
    top: hp("6.557377049180328%")
  },
  View_0_333: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("97.61748600527237%"),
    minHeight: hp("97.61748600527237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(255, 255, 255, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_334: {
    width: wp("88%"),
    minWidth: wp("88%"),
    height: hp("93.98907103825137%"),
    minHeight: hp("93.98907103825137%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.846995035807291%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_335: {
    width: wp("4.266666666666667%"),
    minWidth: wp("4.266666666666667%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.73600260416667%"),
    top: hp("0.4808749006094182%")
  },
  View_0_336: {
    width: wp("4.224000040690104%"),
    height: hp("0.24043715716711161%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(82, 84, 100, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_337: {
    width: wp("2.8160001118977864%"),
    height: hp("0.24043715716711161%"),
    top: hp("0.721311308647115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.4080078124999886%"),
    backgroundColor: "rgba(82, 84, 100, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_338: {
    width: wp("2.4%"),
    height: hp("2.0491803278688523%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.040006510416674%")
  },
  View_0_340: {
    width: wp("35.199999999999996%"),
    height: hp("7.240437158469945%"),
    top: hp("39.4316959902237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("45.75999348958332%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_341: {
    width: wp("35.199999999999996%"),
    height: hp("7.213114649871659%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_342: {
    width: wp("14.399999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.266666666666666%"),
    top: hp("2.524591664798926%")
  },
  Text_0_342: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.079999923706055,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.35199999809265137,
    textTransform: "none"
  },
  View_0_343: {
    width: wp("88%"),
    height: hp("42.48633879781421%"),
    top: hp("51.45355808278902%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(82, 84, 100, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_344: {
    width: wp("35.199999999999996%"),
    height: hp("7.240437158469945%"),
    top: hp("39.4316959902237%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.040006510416674%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_345: {
    width: wp("35.199999999999996%"),
    height: hp("7.213114649871659%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_346: {
    width: wp("17.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.917333984374991%"),
    top: hp("2.524591664798926%")
  },
  Text_0_346: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 11.079999923706055,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.35199999809265137,
    textTransform: "none"
  },
  ImageBackground_0_347: {
    width: wp("73.92000325520833%"),
    height: hp("9.617486547251216%"),
    top: hp("56.262294581679036%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.040006510416674%")
  },
  View_0_348: {
    width: wp("22.933333333333334%"),
    height: hp("5.46448087431694%"),
    top: hp("58.42622433855234%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_349: {
    width: wp("22.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_349: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.319999694824219,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25666677951812744,
    textTransform: "none"
  },
  View_0_350: {
    width: wp("22.933333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.6448067420167405%")
  },
  Text_0_350: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.079999923706055,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2933334410190582,
    textTransform: "none"
  },
  ImageBackground_0_351: {
    width: wp("4.266666666666667%"),
    height: hp("2.185792349726776%"),
    top: hp("59.989074540268525%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.375992838541663%")
  },
  View_0_353: {
    width: wp("0.23466666539510092%"),
    height: hp("5.049180202796811%"),
    top: hp("58.546443584838194%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.93600260416666%"),
    backgroundColor: "rgba(236, 236, 235, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_354: {
    width: wp("73.92000325520833%"),
    height: hp("9.617486547251216%"),
    top: hp("67.80327552003288%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.040006510416674%")
  },
  View_0_355: {
    width: wp("34.4%"),
    height: hp("5.46448087431694%"),
    top: hp("69.96720527690617%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("29.333333333333343%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_356: {
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_356: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.319999694824219,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25666677951812744,
    textTransform: "none"
  },
  View_0_357: {
    width: wp("34.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.6448067420167405%")
  },
  Text_0_357: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.079999923706055,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2933334410190582,
    textTransform: "none"
  },
  View_0_358: {
    width: wp("0.23466666539510092%"),
    height: hp("5.049180202796811%"),
    top: hp("70.08742452319203%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.93600260416666%"),
    backgroundColor: "rgba(236, 236, 235, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  ImageBackground_0_359: {
    width: wp("73.92000325520833%"),
    height: hp("9.617486547251216%"),
    top: hp("79.34425645838671%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.040006510416674%")
  },
  View_0_360: {
    width: wp("36.8%"),
    minWidth: wp("36.8%"),
    height: hp("5.46448087431694%"),
    minHeight: hp("5.46448087431694%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("23.93600260416666%"),
    top: hp("81.50820289153219%")
  },
  View_0_361: {
    width: wp("31.2%"),
    height: hp("5.46448087431694%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.397330729166683%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_362: {
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_362: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 10.319999694824219,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.25666677951812744,
    textTransform: "none"
  },
  View_0_363: {
    width: wp("6.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("2.6448067420167405%")
  },
  Text_0_363: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 11.079999923706055,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2933334410190582,
    textTransform: "none"
  },
  View_0_364: {
    width: wp("0.23466666539510092%"),
    height: hp("5.049180202796811%"),
    top: hp("0.12021924628585623%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(236, 236, 235, 1)",
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_365: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.73224043715847%"),
    minHeight: hp("2.73224043715847%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.906673177083334%"),
    top: hp("82.83059792440447%")
  },
  ImageBackground_0_368: {
    width: wp("5.162666829427083%"),
    height: hp("2.64480882655076%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_369: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.6426595052083286%"),
    top: hp("0.9617456321507802%")
  },
  View_0_370: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_371: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_372: {
    width: wp("2.1333333333333333%"),
    minWidth: wp("2.1333333333333333%"),
    height: hp("0.819672131147541%"),
    minHeight: hp("0.819672131147541%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_373: {
    width: wp("47.733333333333334%"),
    height: hp("23.770491803278688%"),
    top: hp("8.655737788299392%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("20.415999348958323%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_374: {
    width: wp("47.199999999999996%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.35200195312501137%"),
    top: hp("16.830600675989373%")
  },
  Text_0_374: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 17.1200008392334,
    fontWeight: "500",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0,
    textTransform: "none"
  },
  View_0_375: {
    width: wp("42.13333333333333%"),
    height: hp("2.73224043715847%"),
    top: hp("20.91803420436839%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.6986653645833343%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_376: {
    width: wp("16.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  Text_0_376: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 11.079999923706055,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2933334410190582,
    textTransform: "none"
  },
  View_0_377: {
    width: wp("17.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.170670572916663%"),
    top: hp("0%")
  },
  Text_0_377: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 11.079999923706055,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2933334410190582,
    textTransform: "none"
  },
  ImageBackground_0_378: {
    width: wp("1.1733333587646484%"),
    height: hp("0.601092909203201%"),
    top: hp("1.0819690475046926%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("19.711995442708343%")
  },
  View_0_379: {
    width: wp("26.93333333333333%"),
    minWidth: wp("26.93333333333333%"),
    height: hp("13.797814207650273%"),
    minHeight: hp("13.797814207650273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("10.442659505208354%"),
    top: hp("0%")
  },
  ImageBackground_0_381: {
    width: wp("26.75199991861979%"),
    height: hp("13.704917991096204%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_380: {
    width: wp("26.75199991861979%"),
    height: hp("13.704917991096204%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_382: {
    width: wp("26.75199991861979%"),
    height: hp("13.704917991096204%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_383: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("12.906673177083334%"),
    top: hp("71.65027472490823%")
  },
  View_0_384: {
    width: wp("5.333333333333334%"),
    minWidth: wp("5.333333333333334%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_385: {
    width: wp("4.76602274576823%"),
    height: hp("1.1837131990109635%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.17628580729166288%")
  },
  ImageBackground_0_388: {
    width: wp("5.162666829427083%"),
    height: hp("1.8384645545417495%"),
    top: hp("0.0967640694373273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_390: {
    width: wp("6.933333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("40.59733072916666%"),
    top: hp("34.26229758340804%")
  },
  Text_0_390: {
    color: "rgba(4, 178, 138, 1)",
    fontSize: 11.079999923706055,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.2933334410190582,
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
