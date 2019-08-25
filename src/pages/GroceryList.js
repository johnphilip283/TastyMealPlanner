import React from "react";
import {Page, Text, View, Document, StyleSheet} from "@react-pdf/renderer";

const styles = StyleSheet.create({
    page: {
        backgroundColor: "#ffffff",
        margin: 20
    },
    title: {
        fontSize: 30,
        color: '#18c1ee',
        textAlign: 'center'
    },
    ingredientList : {
        display: 'flex',
        flexDirection: 'column',
        padding: 5,
        margin: 10,
        fontSize: 10
    },
    mealName : {
        fontWeight: 'bold'
    }
});

export function PdfDocument(props) {
  console.log("pdf props", props.data);
  return (
    <Document>
      <Page style={styles.page}>
          <Text style={styles.title}>
            Grocery List
          </Text>
        <View>
          {Object.keys(props.data).map((day) => { 
              return Object.keys(props.data[day][0]).map((meal) => {
                if (props.data[day][0][meal].name !== "") {
                return (
                  <View style={styles.ingredientList}>
                    <View style={styles.mealName}>
                      <Text>{meal.toUpperCase()}: {props.data[day][0][meal].name.toUpperCase()}</Text>
                    </View>
                    {props.data[day][0][meal].ingredients.map((ingredient) => {
                      return (
                        <Text>{ingredient}</Text>
                      )
                    })}
                  </View>
                );}
              })
          })}
        </View>
      </Page>
    </Document>
  );
}