import { View, Text, ScrollView } from "react-native";
import { styles } from "./styles";
import { Ingredients } from "@/components/Ingredients";
import { Ingredient } from "@/components/Ingredient";

export default function Index() {
  return (
    <View style={styles.container}>
      <Text style={styles.title}>
        Escolha {"\n"}
        <Text style={styles.subtitle}>os produtos</Text>
      </Text>
      <Text style={styles.message}>
        Descubra receitas baseadas nos produtos que você escolheu.
      </Text>
      <ScrollView contentContainerStyle={styles.ingredients} showsVerticalScrollIndicator={false}>
            {Array.from({length: 100}).map(()=>(
              <Ingredient/>
            ))}
        </ScrollView>
    </View>
  );
}
