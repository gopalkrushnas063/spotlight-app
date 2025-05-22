import { COLORS } from "@/constants/theme";
import { ClerkProvider } from "@clerk/clerk-expo";
import { tokenCache } from "@clerk/clerk-expo/token-cache";
import { Stack } from "expo-router";
import { SafeAreaProvider, SafeAreaView } from "react-native-safe-area-context";

export default function RootLayout() {
  return (
    <ClerkProvider tokenCache={tokenCache}>
      <SafeAreaProvider>
        <SafeAreaView style={{ flex: 1, backgroundColor: COLORS.black }}>
          <Stack
            screenOptions={{
              headerShown: false,
            }}
          />
        </SafeAreaView>
      </SafeAreaProvider>
    </ClerkProvider>
  );
}
