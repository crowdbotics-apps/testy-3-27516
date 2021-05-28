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
        style={styles.ImageBackground_0_658}
      />
      <View style={styles.View_0_660}>
        <Text style={styles.Text_0_660}>Payment cards</Text>
      </View>
      <View style={styles.View_0_661}>
        <View style={styles.View_0_662} />
        <View style={styles.View_0_663} />
      </View>
      <View style={styles.View_0_664}>
        <View style={styles.View_0_665}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7945/67cc/93f51bd717b294c7d6a2332fe174edbb"
            }}
            style={styles.ImageBackground_0_666}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fae/9e28/4acbd078b6de8a6543be1df7fb430f1b"
            }}
            style={styles.ImageBackground_0_667}
          />
          <View style={styles.View_0_668}>
            <View style={styles.View_0_669}>
              <View style={styles.View_0_671} />
              <View style={styles.View_0_670} />
            </View>
            <View style={styles.View_0_672}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35e/99bc/e3ef469272387b748b6a18fc09ea53e3"
                }}
                style={styles.ImageBackground_0_673}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35e/99bc/e3ef469272387b748b6a18fc09ea53e3"
                }}
                style={styles.ImageBackground_0_674}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35e/99bc/e3ef469272387b748b6a18fc09ea53e3"
                }}
                style={styles.ImageBackground_0_675}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35e/99bc/e3ef469272387b748b6a18fc09ea53e3"
                }}
                style={styles.ImageBackground_0_676}
              />
              <View style={styles.View_0_677}>
                <Text style={styles.Text_0_677}>3872</Text>
              </View>
            </View>
            <View style={styles.View_0_678}>
              <Text style={styles.Text_0_678}>17/20</Text>
            </View>
            <View style={styles.View_0_679}>
              <Text style={styles.Text_0_679}>$ 25,388</Text>
            </View>
          </View>
          <View style={styles.View_0_680}>
            <View style={styles.View_0_681}>
              <View style={styles.View_0_682}>
                <Text style={styles.Text_0_682}>3872</Text>
              </View>
              <View style={styles.View_0_683}>
                <Text style={styles.Text_0_683}>**** </Text>
              </View>
              <View style={styles.View_0_684}>
                <Text style={styles.Text_0_684}>**** </Text>
              </View>
              <View style={styles.View_0_685}>
                <Text style={styles.Text_0_685}>**** </Text>
              </View>
            </View>
            <View style={styles.View_0_686}>
              <Text style={styles.Text_0_686}>17/2020</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_687}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7945/67cc/93f51bd717b294c7d6a2332fe174edbb"
            }}
            style={styles.ImageBackground_0_688}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fae/9e28/4acbd078b6de8a6543be1df7fb430f1b"
            }}
            style={styles.ImageBackground_0_689}
          />
          <View style={styles.View_0_690}>
            <View style={styles.View_0_691} />
            <View style={styles.View_0_692}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35e/99bc/e3ef469272387b748b6a18fc09ea53e3"
                }}
                style={styles.ImageBackground_0_693}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35e/99bc/e3ef469272387b748b6a18fc09ea53e3"
                }}
                style={styles.ImageBackground_0_694}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35e/99bc/e3ef469272387b748b6a18fc09ea53e3"
                }}
                style={styles.ImageBackground_0_695}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35e/99bc/e3ef469272387b748b6a18fc09ea53e3"
                }}
                style={styles.ImageBackground_0_696}
              />
              <View style={styles.View_0_697}>
                <Text style={styles.Text_0_697}>2873</Text>
              </View>
            </View>
            <View style={styles.View_0_698}>
              <Text style={styles.Text_0_698}>07/22</Text>
            </View>
            <View style={styles.View_0_699}>
              <Text style={styles.Text_0_699}>$ 34,880</Text>
            </View>
          </View>
          <View style={styles.View_0_700}>
            <View style={styles.View_0_701}>
              <View style={styles.View_0_702}>
                <Text style={styles.Text_0_702}>2873</Text>
              </View>
              <View style={styles.View_0_703}>
                <Text style={styles.Text_0_703}>**** </Text>
              </View>
              <View style={styles.View_0_704}>
                <Text style={styles.Text_0_704}>**** </Text>
              </View>
              <View style={styles.View_0_705}>
                <Text style={styles.Text_0_705}>**** </Text>
              </View>
            </View>
            <View style={styles.View_0_706}>
              <Text style={styles.Text_0_706}>07/2022</Text>
            </View>
          </View>
        </View>
        <View style={styles.View_0_707}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7945/67cc/93f51bd717b294c7d6a2332fe174edbb"
            }}
            style={styles.ImageBackground_0_708}
          />
          <View style={styles.View_0_709}>
            <View style={styles.View_0_710} />
            <View style={styles.View_0_711}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35e/99bc/e3ef469272387b748b6a18fc09ea53e3"
                }}
                style={styles.ImageBackground_0_712}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35e/99bc/e3ef469272387b748b6a18fc09ea53e3"
                }}
                style={styles.ImageBackground_0_713}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35e/99bc/e3ef469272387b748b6a18fc09ea53e3"
                }}
                style={styles.ImageBackground_0_714}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35e/99bc/e3ef469272387b748b6a18fc09ea53e3"
                }}
                style={styles.ImageBackground_0_715}
              />
              <View style={styles.View_0_716}>
                <Text style={styles.Text_0_716}>3212</Text>
              </View>
            </View>
            <View style={styles.View_0_717}>
              <Text style={styles.Text_0_717}>10/24</Text>
            </View>
            <View style={styles.View_0_718}>
              <Text style={styles.Text_0_718}>$ 9,568</Text>
            </View>
          </View>
          <View style={styles.View_0_719}>
            <View style={styles.View_0_720}>
              <View style={styles.View_0_721}>
                <Text style={styles.Text_0_721}>3212</Text>
              </View>
              <View style={styles.View_0_722}>
                <Text style={styles.Text_0_722}>**** </Text>
              </View>
              <View style={styles.View_0_723}>
                <Text style={styles.Text_0_723}>**** </Text>
              </View>
              <View style={styles.View_0_724}>
                <Text style={styles.Text_0_724}>**** </Text>
              </View>
            </View>
            <View style={styles.View_0_725}>
              <Text style={styles.Text_0_725}>10/2024</Text>
            </View>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7a41/cb8e/535dc8a4dffd287a03413638f5f25b35"
            }}
            style={styles.ImageBackground_0_726}
          />
        </View>
        <View style={styles.View_0_727}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/7945/67cc/93f51bd717b294c7d6a2332fe174edbb"
            }}
            style={styles.ImageBackground_0_728}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3fae/9e28/4acbd078b6de8a6543be1df7fb430f1b"
            }}
            style={styles.ImageBackground_0_729}
          />
          <View style={styles.View_0_730}>
            <View style={styles.View_0_731} />
            <View style={styles.View_0_732}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35e/99bc/e3ef469272387b748b6a18fc09ea53e3"
                }}
                style={styles.ImageBackground_0_733}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35e/99bc/e3ef469272387b748b6a18fc09ea53e3"
                }}
                style={styles.ImageBackground_0_734}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35e/99bc/e3ef469272387b748b6a18fc09ea53e3"
                }}
                style={styles.ImageBackground_0_735}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/d35e/99bc/e3ef469272387b748b6a18fc09ea53e3"
                }}
                style={styles.ImageBackground_0_736}
              />
              <View style={styles.View_0_737}>
                <Text style={styles.Text_0_737}>3412</Text>
              </View>
            </View>
            <View style={styles.View_0_738}>
              <Text style={styles.Text_0_738}>12/24</Text>
            </View>
            <View style={styles.View_0_739}>
              <Text style={styles.Text_0_739}>$ 41,563</Text>
            </View>
          </View>
          <View style={styles.View_0_740}>
            <View style={styles.View_0_741}>
              <View style={styles.View_0_742}>
                <Text style={styles.Text_0_742}>3412</Text>
              </View>
              <View style={styles.View_0_743}>
                <Text style={styles.Text_0_743}>**** </Text>
              </View>
              <View style={styles.View_0_744}>
                <Text style={styles.Text_0_744}>**** </Text>
              </View>
              <View style={styles.View_0_745}>
                <Text style={styles.Text_0_745}>**** </Text>
              </View>
            </View>
            <View style={styles.View_0_746}>
              <Text style={styles.Text_0_746}>12/2024</Text>
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_747}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a182/6dde/58f75e4708a864483a5bc28b3516d2d2"
          }}
          style={styles.ImageBackground_0_748}
        />
        <View style={styles.View_0_749}>
          <Text style={styles.Text_0_749}>Add new card</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_0_658: {
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
  View_0_660: {
    width: wp("35.199999999999996%"),
    minWidth: wp("35.199999999999996%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("32.53333333333333%"),
    top: hp("4.098360655737705%")
  },
  Text_0_660: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.37500011920928955,
    textTransform: "none"
  },
  View_0_661: {
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
  View_0_662: {
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
  View_0_663: {
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
  View_0_664: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("55.73770491803278%"),
    minHeight: hp("55.73770491803278%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("14.207650273224044%")
  },
  View_0_665: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_666: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_667: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73333333333333%"),
    top: hp("5.601092896174862%")
  },
  View_0_668: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_669: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_671: {
    width: wp("17.318400065104168%"),
    height: hp("5.680328118996543%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_670: {
    width: wp("17.318400065104168%"),
    height: hp("5.680328118996543%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_672: {
    width: wp("4.533333333333333%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5409845237523463%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2671874999999986%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_673: {
    width: wp("0.15839999516805015%"),
    height: hp("0.0811475385082224%"),
    top: hp("0.21639339259413504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_674: {
    width: wp("0.15839999516805015%"),
    height: hp("0.0811475385082224%"),
    top: hp("0.21639339259413504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5807942708333353%")
  },
  ImageBackground_0_675: {
    width: wp("0.15839999516805015%"),
    height: hp("0.0811475385082224%"),
    top: hp("0.21639339259413504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1615885416666671%")
  },
  ImageBackground_0_676: {
    width: wp("0.15839999516805015%"),
    height: hp("0.0811475385082224%"),
    top: hp("0.21639339259413504%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7423828125000025%")
  },
  View_0_677: {
    width: wp("1.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.534374999999999%"),
    top: hp("0%")
  },
  Text_0_677: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.1679999828338623,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.07920000702142715,
    textTransform: "none"
  },
  View_0_678: {
    width: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.780794270833331%"),
    top: hp("0.5409845237523463%")
  },
  Text_0_678: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.1679999828338623,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.07920000702142715,
    textTransform: "none"
  },
  View_0_679: {
    width: wp("8.533333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2671874999999986%"),
    top: hp("3.8909828728013984%")
  },
  Text_0_679: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_0_680: {
    width: wp("34.13333333333333%"),
    minWidth: wp("34.13333333333333%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%"),
    top: hp("3.0054644808743163%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_681: {
    width: wp("34.13333333333333%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_682: {
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.799999999999997%"),
    top: hp("0%")
  },
  Text_0_682: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_683: {
    width: wp("7.199999999999999%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_0_683: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_684: {
    width: wp("7.199999999999999%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666673%")
  },
  Text_0_684: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_685: {
    width: wp("7.199999999999999%"),
    top: hp("0.5464480874316955%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%")
  },
  Text_0_685: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_686: {
    width: wp("14.133333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  Text_0_686: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.29166677594184875,
    textTransform: "none"
  },
  View_0_687: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("14.48087431693989%")
  },
  ImageBackground_0_688: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_689: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73333333333333%"),
    top: hp("5.601092896174865%")
  },
  View_0_690: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("3.2786885245901694%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_691: {
    width: wp("17.318400065104168%"),
    height: hp("5.680328118996543%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_692: {
    width: wp("4.533333333333333%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5409824392183182%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2671874999999986%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_693: {
    width: wp("0.15839999516805015%"),
    height: hp("0.0811475385082224%"),
    top: hp("0.21639547712815954%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_694: {
    width: wp("0.15839999516805015%"),
    height: hp("0.0811475385082224%"),
    top: hp("0.21639547712815954%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5807942708333353%")
  },
  ImageBackground_0_695: {
    width: wp("0.15839999516805015%"),
    height: hp("0.0811475385082224%"),
    top: hp("0.21639547712815954%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1615885416666671%")
  },
  ImageBackground_0_696: {
    width: wp("0.15839999516805015%"),
    height: hp("0.0811475385082224%"),
    top: hp("0.21639547712815954%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7423828125000025%")
  },
  View_0_697: {
    width: wp("1.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.534374999999999%"),
    top: hp("0%")
  },
  Text_0_697: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.1679999828338623,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.07920000702142715,
    textTransform: "none"
  },
  View_0_698: {
    width: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.780794270833331%"),
    top: hp("0.5409824392183182%")
  },
  Text_0_698: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.1679999828338623,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.07920000702142715,
    textTransform: "none"
  },
  View_0_699: {
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2671874999999986%"),
    top: hp("3.890982872801395%")
  },
  Text_0_699: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_0_700: {
    width: wp("34.4%"),
    minWidth: wp("34.4%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%"),
    top: hp("3.00546448087432%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_701: {
    width: wp("34.4%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_702: {
    width: wp("9.333333333333334%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.799999999999997%"),
    top: hp("0%")
  },
  Text_0_702: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_703: {
    width: wp("7.199999999999999%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_0_703: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_704: {
    width: wp("7.199999999999999%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666673%")
  },
  Text_0_704: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_705: {
    width: wp("7.199999999999999%"),
    top: hp("0.5464480874316919%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%")
  },
  Text_0_705: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_706: {
    width: wp("14.933333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  Text_0_706: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.29166677594184875,
    textTransform: "none"
  },
  View_0_707: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("28.961748633879782%")
  },
  ImageBackground_0_708: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  View_0_709: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_710: {
    width: wp("17.318400065104168%"),
    height: hp("5.680328118996543%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_711: {
    width: wp("4.533333333333333%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5409824392183253%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2671874999999986%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_712: {
    width: wp("0.15839999516805015%"),
    height: hp("0.0811475385082224%"),
    top: hp("0.21639547712815244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_713: {
    width: wp("0.15839999516805015%"),
    height: hp("0.0811475385082224%"),
    top: hp("0.21639547712815244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5807942708333353%")
  },
  ImageBackground_0_714: {
    width: wp("0.15839999516805015%"),
    height: hp("0.0811475385082224%"),
    top: hp("0.21639547712815244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1615885416666671%")
  },
  ImageBackground_0_715: {
    width: wp("0.15839999516805015%"),
    height: hp("0.0811475385082224%"),
    top: hp("0.21639547712815244%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7423828125000025%")
  },
  View_0_716: {
    width: wp("1.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.534374999999999%"),
    top: hp("0%")
  },
  Text_0_716: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.1679999828338623,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.07920000702142715,
    textTransform: "none"
  },
  View_0_717: {
    width: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.599999999999996%"),
    top: hp("0.5464480874316919%")
  },
  Text_0_717: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.1679999828338623,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.07920000702142715,
    textTransform: "none"
  },
  View_0_718: {
    width: wp("7.199999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2671874999999986%"),
    top: hp("3.890982872801402%")
  },
  Text_0_718: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_0_719: {
    width: wp("33.6%"),
    minWidth: wp("33.6%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%"),
    top: hp("3.0054644808743163%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_720: {
    width: wp("33.6%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_721: {
    width: wp("8.799999999999999%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.799999999999997%"),
    top: hp("0%")
  },
  Text_0_721: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_722: {
    width: wp("7.199999999999999%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_0_722: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_723: {
    width: wp("7.199999999999999%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666673%")
  },
  Text_0_723: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_724: {
    width: wp("7.199999999999999%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%")
  },
  Text_0_724: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_725: {
    width: wp("14.666666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590166%")
  },
  Text_0_725: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.29166677594184875,
    textTransform: "none"
  },
  ImageBackground_0_726: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("2.0491803278688523%"),
    minHeight: hp("2.0491803278688523%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("72.26666666666667%"),
    top: hp("5.191256830601091%")
  },
  View_0_727: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("43.44262295081967%")
  },
  ImageBackground_0_728: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("12.295081967213115%"),
    minHeight: hp("12.295081967213115%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_729: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("1.092896174863388%"),
    minHeight: hp("1.092896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("71.73333333333333%"),
    top: hp("5.601092896174862%")
  },
  View_0_730: {
    width: wp("17.333333333333336%"),
    minWidth: wp("17.333333333333336%"),
    height: hp("5.737704918032787%"),
    minHeight: hp("5.737704918032787%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("5.333333333333334%"),
    top: hp("3.278688524590166%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_731: {
    width: wp("17.318400065104168%"),
    height: hp("5.680328118996543%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    borderColor: "rgba(151, 151, 151, 1)",
    borderWidth: 1
  },
  View_0_732: {
    width: wp("4.533333333333333%"),
    height: hp("0.546448087431694%"),
    top: hp("0.5409866082863743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2671874999999986%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_733: {
    width: wp("0.15839999516805015%"),
    height: hp("0.0811475385082224%"),
    top: hp("0.21639130806010343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_734: {
    width: wp("0.15839999516805015%"),
    height: hp("0.0811475385082224%"),
    top: hp("0.21639130806010343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.5807942708333353%")
  },
  ImageBackground_0_735: {
    width: wp("0.15839999516805015%"),
    height: hp("0.0811475385082224%"),
    top: hp("0.21639130806010343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.1615885416666671%")
  },
  ImageBackground_0_736: {
    width: wp("0.15839999516805015%"),
    height: hp("0.0811475385082224%"),
    top: hp("0.21639130806010343%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.7423828125000025%")
  },
  View_0_737: {
    width: wp("1.866666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("2.534374999999999%"),
    top: hp("0%")
  },
  Text_0_737: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.1679999828338623,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.07920000702142715,
    textTransform: "none"
  },
  View_0_738: {
    width: wp("2.4%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.780794270833331%"),
    top: hp("0.5409866082863743%")
  },
  Text_0_738: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 2.1679999828338623,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.07920000702142715,
    textTransform: "none"
  },
  View_0_739: {
    width: wp("8.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("1.2671874999999986%"),
    top: hp("3.890982872801402%")
  },
  Text_0_739: {
    color: "rgba(255, 255, 255, 1)",
    fontSize: 6,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.20000000298023224,
    textTransform: "none"
  },
  View_0_740: {
    width: wp("33.86666666666667%"),
    minWidth: wp("33.86666666666667%"),
    height: hp("6.284153005464481%"),
    minHeight: hp("6.284153005464481%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("26.4%"),
    top: hp("3.0054644808743163%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_741: {
    width: wp("33.86666666666667%"),
    height: hp("3.551912568306011%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  View_0_742: {
    width: wp("9.066666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("24.799999999999997%"),
    top: hp("0%")
  },
  Text_0_742: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_743: {
    width: wp("7.199999999999999%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  Text_0_743: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_744: {
    width: wp("7.199999999999999%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8.266666666666673%")
  },
  Text_0_744: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_745: {
    width: wp("7.199999999999999%"),
    top: hp("0.546448087431699%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("16.53333333333333%")
  },
  Text_0_745: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "right",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_746: {
    width: wp("14.133333333333335%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("3.278688524590173%")
  },
  Text_0_746: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 11,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.29166677594184875,
    textTransform: "none"
  },
  View_0_747: {
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
  ImageBackground_0_748: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_749: {
    width: wp("28.799999999999997%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("27.733333333333334%"),
    top: hp("2.868852459016395%")
  },
  Text_0_749: {
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
