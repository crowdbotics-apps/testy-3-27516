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
        style={styles.ImageBackground_0_138}
      />
      <View style={styles.View_0_140}>
        <Text style={styles.Text_0_140}>Categories</Text>
      </View>
      <View style={styles.View_0_141}>
        <View style={styles.View_0_142} />
        <View style={styles.View_0_143} />
      </View>
      <View style={styles.View_0_144}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/129f/7337/be953e504ca99d7e75e52f5bccf8e9ae"
          }}
          style={styles.ImageBackground_0_145}
        />
        <View style={styles.View_0_146}>
          <Text style={styles.Text_0_146}>Search by category</Text>
        </View>
        <View style={styles.View_0_147}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/8379/af1a/c434e7b268756440a246391ad7a17e9f"
            }}
            style={styles.ImageBackground_0_150}
          />
        </View>
      </View>
      <View style={styles.View_0_151}>
        <View style={styles.View_0_152}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/660a/1d57/3284a0b0c8b90bad7d6219ccbcaa95cd"
            }}
            style={styles.ImageBackground_0_153}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b74/f039/4af09e96e236564aeae4ff4dbeb5f9fa"
            }}
            style={styles.ImageBackground_0_154}
          />
          <View style={styles.View_0_155}>
            <Text style={styles.Text_0_155}>Courier services</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e03/e8f1/af644f9fa33e2cb9d42d9627e1259f14"
            }}
            style={styles.ImageBackground_0_156}
          />
          <View style={styles.View_0_157}>
            <View style={styles.View_0_158}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/dbee/c96c/a61facc7f4e7628b7a10b39313eb7906"
                }}
                style={styles.ImageBackground_0_161}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c829/4da3/490df16119d5b56b87e6da00fb4372ae"
                }}
                style={styles.ImageBackground_0_162}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/9127/fcc2/462fa3aa11dd0a1cc3c6cc1eaad36ac5"
                }}
                style={styles.ImageBackground_0_165}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_167}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/660a/1d57/3284a0b0c8b90bad7d6219ccbcaa95cd"
            }}
            style={styles.ImageBackground_0_168}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b74/f039/4af09e96e236564aeae4ff4dbeb5f9fa"
            }}
            style={styles.ImageBackground_0_169}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e03/e8f1/af644f9fa33e2cb9d42d9627e1259f14"
            }}
            style={styles.ImageBackground_0_170}
          />
          <View style={styles.View_0_171}>
            <Text style={styles.Text_0_171}>Furniture works</Text>
          </View>
          <View style={styles.View_0_172}>
            <View style={styles.View_0_173}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/540f/99d6/c6c425e910ce98aa8bf263067571bab6"
                }}
                style={styles.ImageBackground_0_176}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
                }}
                style={styles.ImageBackground_0_177}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1b9/05a2/101122197256e42a56a14c68997851a5"
                }}
                style={styles.ImageBackground_0_180}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/540f/99d6/c6c425e910ce98aa8bf263067571bab6"
                }}
                style={styles.ImageBackground_0_183}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1b9/05a2/101122197256e42a56a14c68997851a5"
                }}
                style={styles.ImageBackground_0_186}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
                }}
                style={styles.ImageBackground_0_187}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/2580/5b85/ee9b7ab1a9bb9121e0ef8891b372b99b"
                }}
                style={styles.ImageBackground_0_188}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/c1b9/05a2/101122197256e42a56a14c68997851a5"
                }}
                style={styles.ImageBackground_0_191}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/540f/99d6/c6c425e910ce98aa8bf263067571bab6"
                }}
                style={styles.ImageBackground_0_194}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_195}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/660a/1d57/3284a0b0c8b90bad7d6219ccbcaa95cd"
            }}
            style={styles.ImageBackground_0_196}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b74/f039/4af09e96e236564aeae4ff4dbeb5f9fa"
            }}
            style={styles.ImageBackground_0_197}
          />
          <View style={styles.View_0_198}>
            <Text style={styles.Text_0_198}>Cleaning services</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e03/e8f1/af644f9fa33e2cb9d42d9627e1259f14"
            }}
            style={styles.ImageBackground_0_199}
          />
          <View style={styles.View_0_200}>
            <ImageBackground
              source={{
                uri:
                  "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/208a/1ed5/25e01eb789fad909a72eb30f737b2ce4"
              }}
              style={styles.ImageBackground_0_201}
            />
          </View>
        </View>
        <View style={styles.View_0_205}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/660a/1d57/3284a0b0c8b90bad7d6219ccbcaa95cd"
            }}
            style={styles.ImageBackground_0_206}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b74/f039/4af09e96e236564aeae4ff4dbeb5f9fa"
            }}
            style={styles.ImageBackground_0_207}
          />
          <View style={styles.View_0_208}>
            <Text style={styles.Text_0_208}>Equipment repair</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e03/e8f1/af644f9fa33e2cb9d42d9627e1259f14"
            }}
            style={styles.ImageBackground_0_209}
          />
          <View style={styles.View_0_210}>
            <View style={styles.View_0_211}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/3794/9c06/82ba2df320175eb9d2aca7f57f4ad643"
                }}
                style={styles.ImageBackground_0_214}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/5796/49e4/ccdefd97ca014042b64c23dc61e7c696"
                }}
                style={styles.ImageBackground_0_215}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6b30/da1d/a78d47a376d3ab4e3363d8e1b872d2ee"
                }}
                style={styles.ImageBackground_0_216}
              />
            </View>
          </View>
        </View>
        <View style={styles.View_0_217}>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/660a/1d57/3284a0b0c8b90bad7d6219ccbcaa95cd"
            }}
            style={styles.ImageBackground_0_218}
          />
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/0b74/f039/4af09e96e236564aeae4ff4dbeb5f9fa"
            }}
            style={styles.ImageBackground_0_219}
          />
          <View style={styles.View_0_220}>
            <Text style={styles.Text_0_220}>Interior design</Text>
          </View>
          <ImageBackground
            source={{
              uri:
                "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/6e03/e8f1/af644f9fa33e2cb9d42d9627e1259f14"
            }}
            style={styles.ImageBackground_0_221}
          />
          <View style={styles.View_0_222}>
            <View style={styles.View_0_223}>
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/581a/102d/da65a7388b5c77612006496c1043c129"
                }}
                style={styles.ImageBackground_0_226}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb5/44a0/c0a9af86b3dcc8a37d73a6e315cd59a2"
                }}
                style={styles.ImageBackground_0_229}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/ee2f/ba0b/090b895a40d1bd705ab8d409102050f6"
                }}
                style={styles.ImageBackground_0_232}
              />
              <ImageBackground
                source={{
                  uri:
                    "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/bdb5/44a0/c0a9af86b3dcc8a37d73a6e315cd59a2"
                }}
                style={styles.ImageBackground_0_235}
              />
            </View>
          </View>
        </View>
      </View>
      <View style={styles.View_0_236}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/a2e4/1c8b/87ffc95bcfdb3aeb7f1d362bfd2faf62"
          }}
          style={styles.ImageBackground_0_237}
        />
        <View style={styles.View_0_238}>
          <Text style={styles.Text_0_238}>Back</Text>
        </View>
      </View>
      <View style={styles.View_0_239}>
        <ImageBackground
          source={{
            uri:
              "https://s3-us-west-2.amazonaws.com/figma-alpha-api/img/531a/5cc8/8752d4b8fa9886639bfb0599ef79f0b5"
          }}
          style={styles.ImageBackground_0_240}
        />
        <View style={styles.View_0_241}>
          <Text style={styles.Text_0_241}>Next</Text>
        </View>
      </View>
    </ScrollView>
  )
}

const styles = StyleSheet.create({
  ScrollView_1: {},
  View_2: { height: hp("110.92896174863387%") },
  ImageBackground_0_138: {
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
  View_0_140: {
    width: wp("26.666666666666668%"),
    minWidth: wp("26.666666666666668%"),
    minHeight: hp("3.0054644808743167%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("36.8%"),
    top: hp("4.098360655737705%")
  },
  Text_0_140: {
    color: "rgba(82, 84, 100, 1)",
    fontSize: 14,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.37500011920928955,
    textTransform: "none"
  },
  View_0_141: {
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
  View_0_142: {
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
  View_0_143: {
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
  View_0_144: {
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
  ImageBackground_0_145: {
    width: wp("84%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_146: {
    width: wp("40.53333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("13.333333333333336%"),
    top: hp("2.8688524590163915%")
  },
  Text_0_146: {
    color: "rgba(176, 176, 195, 1)",
    fontSize: 13,
    fontWeight: "500",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_0_147: {
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
  ImageBackground_0_150: {
    width: wp("4.195681762695312%"),
    height: hp("2.1831129418044792%"),
    top: hp("0.0013403553780335642%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.03547363281250071%")
  },
  View_0_151: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("63.387978142076506%"),
    minHeight: hp("63.387978142076506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("8%"),
    top: hp("28.142076502732237%")
  },
  View_0_152: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("39.34426229508196%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_153: {
    width: wp("2.079015350341797%"),
    height: hp("1.7735182913274712%"),
    top: hp("4.281374404990615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.49382731119792%")
  },
  ImageBackground_0_154: {
    width: wp("84%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_155: {
    width: wp("32.800000000000004%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("3.961748633879793%")
  },
  Text_0_155: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  ImageBackground_0_156: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_157: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%"),
    top: hp("4.234972677595636%")
  },
  View_0_158: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("2.5956284153005464%"),
    minHeight: hp("2.5956284153005464%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_161: {
    width: wp("2.25%"),
    height: hp("1.940320749751857%"),
    top: hp("0.6211577868852487%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.874894205729168%")
  },
  ImageBackground_0_162: {
    width: wp("3.125018564860026%"),
    height: hp("1.0245901639344261%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("4.874894205729168%")
  },
  ImageBackground_0_165: {
    width: wp("4.624808247884114%"),
    height: hp("2.5614754098360657%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.000089518229165364%")
  },
  View_0_167: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_168: {
    width: wp("2.079015350341797%"),
    height: hp("1.7735182913274712%"),
    top: hp("4.554602617774506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.02716064453125%")
  },
  ImageBackground_0_169: {
    width: wp("84%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_170: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_171: {
    width: wp("31.2%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("3.961748633879786%")
  },
  Text_0_171: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  View_0_172: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.199999999999999%"),
    top: hp("3.4153005464480906%")
  },
  View_0_173: {
    width: wp("6.933333333333333%"),
    minWidth: wp("6.933333333333333%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_176: {
    width: wp("6.755543009440104%"),
    height: hp("1.2487002409221044%"),
    top: hp("2.8106272546319993%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08884277343750036%")
  },
  ImageBackground_0_177: {
    width: wp("0.18006857236226398%"),
    height: hp("0.09224824403804509%"),
    top: hp("3.3888269643314537%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3765299479166693%")
  },
  ImageBackground_0_180: {
    width: wp("0.5410971323649089%"),
    height: hp("0.27715065440193554%"),
    top: hp("3.2964779379589295%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.195971679687503%")
  },
  ImageBackground_0_183: {
    width: wp("6.755543009440104%"),
    height: hp("1.2488017316724433%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08884277343750036%")
  },
  ImageBackground_0_186: {
    width: wp("0.5410971323649089%"),
    height: hp("0.27715065440193554%"),
    top: hp("0.4857506256937363%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.195971679687503%")
  },
  ImageBackground_0_187: {
    width: wp("0.17987047831217448%"),
    height: hp("0.09214676143041725%"),
    top: hp("0.5783539652172998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3766357421874993%")
  },
  ImageBackground_0_188: {
    width: wp("0.18006857236226398%"),
    height: hp("0.09224824403804509%"),
    top: hp("1.983538351423757%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.3765299479166693%")
  },
  ImageBackground_0_191: {
    width: wp("0.5410971323649089%"),
    height: hp("0.27715065440193554%"),
    top: hp("1.8910892674180353%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.195971679687503%")
  },
  ImageBackground_0_194: {
    width: wp("6.755543009440104%"),
    height: hp("1.2487509211555856%"),
    top: hp("1.4052886129077002%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.08884277343750036%")
  },
  View_0_195: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("13.114754098360663%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_196: {
    width: wp("2.079015350341797%"),
    height: hp("1.7735182913274712%"),
    top: hp("4.554602617774506%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("76.02716064453125%")
  },
  ImageBackground_0_197: {
    width: wp("84%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_198: {
    width: wp("36.266666666666666%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("3.961748633879779%")
  },
  Text_0_198: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  ImageBackground_0_199: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_200: {
    width: wp("8%"),
    minWidth: wp("8%"),
    height: hp("4.098360655737705%"),
    minHeight: hp("4.098360655737705%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.666666666666666%"),
    top: hp("3.41530054644808%")
  },
  ImageBackground_0_201: {
    width: wp("8%"),
    height: hp("4.098360655737705%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_205: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("26.22950819672132%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_206: {
    width: wp("2.079015350341797%"),
    height: hp("1.7735182913274712%"),
    top: hp("4.55459844870645%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.49382731119792%")
  },
  ImageBackground_0_207: {
    width: wp("84%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_208: {
    width: wp("35.46666666666667%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("3.961748633879779%")
  },
  Text_0_208: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  ImageBackground_0_209: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_210: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("7.466666666666667%"),
    top: hp("3.8251366120218506%")
  },
  View_0_211: {
    width: wp("6.4%"),
    minWidth: wp("6.4%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_214: {
    width: wp("6.377777608235677%"),
    height: hp("3.2673041025797525%"),
    top: hp("0.008538251366118743%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0.005558268229167496%")
  },
  ImageBackground_0_215: {
    width: wp("3.2722221374511715%"),
    height: hp("1.3917349726775956%"),
    top: hp("1.9125683060109324%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.1111083984374996%")
  },
  ImageBackground_0_216: {
    width: wp("2.4888888041178383%"),
    height: hp("1.343351504841789%"),
    top: hp("0.022771449688356427%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_217: {
    width: wp("84%"),
    minWidth: wp("84%"),
    height: hp("10.92896174863388%"),
    minHeight: hp("10.92896174863388%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("52.459016393442624%"),
    backgroundColor: "rgba(0, 0, 0, 0)",
    overflow: "hidden"
  },
  ImageBackground_0_218: {
    width: wp("2.079015350341797%"),
    height: hp("1.7735182913274712%"),
    top: hp("4.281374404990615%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("75.49382731119792%")
  },
  ImageBackground_0_219: {
    width: wp("84%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_220: {
    width: wp("29.599999999999998%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("25.6%"),
    top: hp("3.961748633879779%")
  },
  Text_0_220: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "left",
    fontStyle: "normal",
    letterSpacing: 0.33333346247673035,
    textTransform: "none"
  },
  ImageBackground_0_221: {
    width: wp("21.333333333333336%"),
    height: hp("10.92896174863388%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_222: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("6.933333333333335%"),
    top: hp("3.6885245901639365%")
  },
  View_0_223: {
    width: wp("7.466666666666668%"),
    minWidth: wp("7.466666666666668%"),
    height: hp("3.415300546448088%"),
    minHeight: hp("3.415300546448088%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%"),
    top: hp("0%")
  },
  ImageBackground_0_226: {
    width: wp("3.577777862548828%"),
    height: hp("1.1153632825841018%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888916015625004%")
  },
  ImageBackground_0_229: {
    width: wp("3.577777862548828%"),
    height: hp("0.9562841530054645%"),
    top: hp("2.3904102096140747%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888916015625004%")
  },
  ImageBackground_0_232: {
    width: wp("3.577777862548828%"),
    height: hp("3.34669305978577%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  ImageBackground_0_235: {
    width: wp("3.577777862548828%"),
    height: hp("0.9562841530054645%"),
    top: hp("1.2747425850623273%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("3.8888916015625004%")
  },
  View_0_236: {
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
  ImageBackground_0_237: {
    width: wp("40%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_238: {
    width: wp("10.133333333333333%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("14.933333333333334%"),
    top: hp("2.868852459016395%")
  },
  Text_0_238: {
    color: "rgba(131, 131, 145, 1)",
    fontSize: 13,
    fontWeight: "600",
    textAlign: "center",
    fontStyle: "normal",
    letterSpacing: 0.4000000059604645,
    textTransform: "none"
  },
  View_0_239: {
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
  ImageBackground_0_240: {
    width: wp("40%"),
    height: hp("8.19672131147541%"),
    top: hp("0%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("0%")
  },
  View_0_241: {
    width: wp("9.6%"),
    marginLeft: 0,
    marginTop: 0,
    position: "absolute",
    left: wp("15.200000000000003%"),
    top: hp("2.868852459016395%")
  },
  Text_0_241: {
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
