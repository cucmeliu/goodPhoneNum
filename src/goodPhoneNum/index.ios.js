/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {
  AppRegistry,
  StyleSheet,
  Text,
  View,
  TouchableHighlight,
  TextInput
} from 'react-native';

export default class goodPhoneNum extends Component {

  constructor(props) {
    super(props);
    this.state = {value: '', num: 0, expl:'', flag:'吉'};
  }

  getValue(xxx) {
    this.setState({value: xxx});
  }

  show(xx) {
    //alert(xx);
    if (xx == null || xx.length == 0){

    } else {
      var ex = xx.split(' ');
      this.setState({num: ex[0], expl: ex[1], flag: ex[2]});
    }
  }

  getexp(num) {
    var goodexps = [
      "0 ",
      "1 大展鸿图，信用得固，无远弗界，可获成功 吉",
      "2 根基不固，摇摇欲坠，一盛一衰，劳而无功 凶",
      "3 根深蒂固，蒸蒸日上，如意吉祥，百事顺遂 吉",
      "4 坎坷前途，苦难折磨，非有毅力，难望成功 凶",
      "5 阴阳和合，生意欣荣，名利双收，后福重重 吉",
      "6 万宝云集，天降幸运，立志奋发，可成大功 吉",
      "7 专心经营，和气致祥，排除万难，必获成功 吉",
      "8 努力发达，贯彻志望，不忘进退，成功可期 吉",
      "9 虽抱奇才，有才无命，独营无力，财利无望 凶",
      "10 乌云遮月，暗淡无光，空费心力，徒劳无功 凶",
      "11 草木逢春，枯叶沾露，稳健着实，必得人望 吉",
      "12 薄弱无力，孤立无摇，外祥内苦，谋事难成 凶",
      "13 天赋吉运，能得人望，善用智慧，必获成功 吉",
      "14 忍得苦难，必有后福，是成是败，惟靠坚毅 凶",
      "15 谦恭做事，必得人和，大事成就，一定兴隆 吉",
      "16 能获众望，成就大业，名利双收，盟主四方 吉",
      "17 排除万难，有贵人助，把握时机，可得成功 吉",
      "18 经商做事，顺利昌隆，如能慎始，百事亨通 吉",
      "19 成功虽早，慎防空亏，内外不合，障碍重重 凶",
      "20 智高志大，历尽艰难，焦心忧劳，进退两难 凶",
      "21 专心经营，善用智慧，霜雪梅花，春来怒放 吉",
      "22 秋草逢霜，怀才不遇，忧愁怨苦，事不如意 凶",
      "23 旭日升天，名显四方，渐次进展，终成大业 吉",
      "24 锦绣前程，须靠自力，多用智谋，能奏大功 吉",
      "25 天时地利，再得人格，讲信修睦，即可成功 吉",
      "26 波澜起伏，千变万化，凌驾万难，必可成功 凶",
      "27 一成一败，一盛一衰，惟靠谨慎，可守成功 凶带吉",
      "28 鱼临旱地，难逃恶运，此数大凶，不如更名 凶",
      "29 如龙得云，青云直上，智谋奋进，才略奏功 吉",
      "30 吉凶参半，得失相伴，投机取巧，如赛一样 凶",
      "31 此数大吉，名利双收，渐进向上，大业成就 吉",
      "32 池中之龙，风云际会，一跃上天，成功可望 吉",
      "33 不可意气，善用智慧，如能慎始，必可昌隆 吉",
      "34 灾难不绝，难望成功，此数大凶，不如更名 凶",
      "35 中吉之数，进退保守，生意安稳，成就可期 吉",
      "36 波澜重迭，常陷穷困，动不如静，有才无命 凶",
      "37 逢凶化吉，吉人天相，风条雨顺，生意兴隆 吉",
      "38 名虽可得，利则难获，艺界发展，可望成功 凶带吉",
      "39 云开见月，虽有劳碌，光明坦途，指日可期 吉",
      "40 一胜一衰，浮沉不定，知难而退，自获天佑 吉带凶",
      "41 天赋吉运，德望兼备，继续努力，前途无限 吉",
      "42 事业不专，十九不成，专心进取，可望成功 吉带凶",
      "43 雨夜之花，外祥内苦，忍耐自重，转凶为吉 吉带凶",
      "44 虽用心计，事难遂愿，贪功好进，必招失败 凶",
      "45 杨柳遇春，绿叶发枝，冲破难关，一举成名 吉",
      "46 坎坷不平，艰难重重，若无耐心，难望有成 凶",
      "47 有贵人助，可成大业，虽遇不幸，浮沉不大 吉",
      "48 美化丰实，鹤立鸡群，名利俱全，繁荣富贵 吉",
      "49 遇吉则吉，遇凶则凶，惟靠谨慎，逢凶化吉 凶",
      "50 吉凶互见，一成一败，凶中有吉，吉中有凶 吉带凶",
      "51 一盛一衰，浮沉不常，自重自处，可保平安 吉带凶",
      "52 草木逢春，雨过天晴，渡过难关，即获成功 吉",
      "53 盛衰参半，外祥内苦，先吉后凶，先凶后吉 吉带凶",
      "54 虽倾全力，难望成功，此数大凶，最好改名 凶",
      "55 外观隆昌，内隐祸患，克服难关，开出泰运 吉带凶",
      "56 事与愿违，终难成功，欲速不达，有始有终 凶",
      "57 努力经营，时来运转，旷野枯草，春来花开 吉",
      "58 半凶半吉，浮沉多端，始凶终吉，能保成功 凶带吉",
      "59 遇事犹疑，难望成事，大刀阔斧，始可有成 凶",
      "60 黑暗无光，心迷意乱，出尔反尔，难定方针 凶",
      "61 云遮半月，百隐风波，应自谨慎，始保平安 吉带凶",
      "62 烦闷懊恼，事事难展，自防灾祸，始免困境 凶",
      "63 万物化育，繁荣之象，专心一意，始能成功 吉",
      "64 见异思迁，十九不成，徒劳无功，不如更名 凶",
      "65 吉运自来，能享盛名，把握机会，必获成功 吉",
      "66 黑夜漫长，进退维谷，内外不合，信用缺乏 凶",
      "67 时来运转，事事如意，功成名就，富贵自来 吉",
      "68 思虑周详，计划力行，不失先机，可望成功 吉",
      "69 动摇不安，常陷逆境，不得时运，难得利润 凶",
      "70 惨淡经营，难免贫困，此数不吉，最好改名 凶",
      "71 吉凶参半，惟赖勇气，贯彻力行，始可成功 吉带凶",
      "72 利害混集，凶多吉少，得而复失，难以安顺 凶",
      "73 安乐自来，自然吉祥，力行不懈，终必成功 吉",
      "74 利不及费，坐食山空，如无智谋，难望成功 凶",
      "75 吉中带凶，欲速不达，进不如守，可保安详 吉带凶",
      "76 此数大凶，破产之象，宜速改名，以避厄运 凶",
      "77 先苦后甘，先甘后苦，如能守成，不致失败 吉带凶",
      "78 有得有失，华而不实，须防劫财，始保平安 吉带凶",
      "79 如走夜路，前途无光，希望不大，劳而无功 凶",
      "80 得而复失，枉费心机，守成无贪，可保安稳 吉带凶",
      "81 最极之数，还本归元，能得繁业，发达成功 吉"
    ];
    return goodexps[num];
  }

  isGood(num) {
    var goodnums = [1, 3, 5, 6, 7, 8, 11,
  			13, 15, 16, 17, 18, 21, 23, 24, 25, 29, 31, 32, 33, 35, 37, 39, 41,
  			45, 47, 48, 52, 57, 63, 65, 67, 68, 73, 81];
    if (goodnums.indexOf(num) > -1) {
      return true;
    } else {
      return false;
    }
  }

  recalNum(num) {
    if (isNaN(num) || (num.length != 11)) {
      //this.setState({expl: '请输入纯数字11位手机号！'});
      //alert('请输入纯数字11位手机号！')
      return 0;
    } else {
      // 取最后4位
      num = num.slice(-4);
      //alert(num);
		var iPart = parseInt(num / 80);
		var fPart =  ((num / 80.0) - iPart);
    //alert('aa:'+num);
		return parseInt(fPart * 80);
    }
	}

  _onPress(num) {
    this.getexp(this.recalNum(num));
  }


  render() {
    return (
      <View style={styles.container}>
        <Text style={styles.title}>
          手机号码吉凶预测
          {'\n'}
        </Text>

        <TextInput style={styles.txtInput}
        id='phonenum' placeholder='请输入手机号'
        onChangeText={this.getValue.bind(this)}
        value={this.state.value} >
        </TextInput>

        <TouchableHighlight style={styles.btnHighLight}
          onPress={this.show.bind(this, this.getexp(this.recalNum(this.state.value)))}>
          <Text style={styles.btnText}>预测</Text>
        </TouchableHighlight>

        <Text style={styles.txtHint}>
        {'\n'}
        手机号码吉凶预测，是根据周易数理预测之原理，来测试手机号码对主人的运势影响。预测结果仅供参考！
        {'\n'}
        </Text>

        <View >


          <Text style={styles.txtResult}>
            总评：{this.state.flag}
          </Text>
          <Text style={styles.txtResult}>
            详解：{this.state.expl}
          </Text>

        </View>
        <Text style={styles.txtCopyright}>
        {'\n'}{'\n'}{'\n'}
          Copyright: leo@ikohoo 2015-2017
        </Text>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    //flex: 1,
    //justifyContent: 'center',
    //alignItems: 'center',
    backgroundColor: '#F5FCFF',
  },
  title: {
    fontSize: 30,
    textAlign: 'center',
    color: 'white',
    backgroundColor: '#0faaea',
  },
  txtInput:{
      fontSize: 30,
      //color: 'gray',
      margin: 20,
      borderColor: 'gray'
  },
  btnHighLight: {
    //color:'red',
    borderColor: 'gray',
    borderRadius: 2,
    borderWidth: 1,
    backgroundColor: '#0faaea',
    margin: 20,
  },
  btnText: {
    fontSize: 20,
    color: 'white',
    textAlign: 'center',
    margin: 10,
  },
  txtHint: {
    margin: 10,
  },
  txtResult: {
    fontSize: 20,
    margin: 10,
  },
  txtCopyright: {
    textAlign: 'center',
    bottom: 10,
  },
});

AppRegistry.registerComponent('goodPhoneNum', () => goodPhoneNum);
