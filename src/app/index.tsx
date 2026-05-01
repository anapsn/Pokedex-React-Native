import { Link } from "expo-router";
import {
  CaretRightIcon,
  GearIcon,
  MagnifyingGlassIcon,
} from "phosphor-react-native";
import {
  Dimensions,
  FlatList,
  Image,
  Pressable,
  Text,
  TextInput,
  View,
} from "react-native";
import { style } from "./styles";

import { useEffect, useState } from "react";
import { fechPokemons } from "./services/api";
import { PokemonListItem } from "./types/pokemon";
import Modal from "react-native-modal";
import Pokemon from "./pokemon/[id]";

const { height } = Dimensions.get("window");

export default function Index() {
  const [pokemons, setPokemons] = useState<PokemonListItem[]>([]);
  const [isModalVisible, setModalVisible] = useState(false);
  const [selectedPokemon, setSelectedPokemon] = useState<string | null>(null);

  const toggleModal = (pokemonName?: string) => {
    if (pokemonName) {
      setSelectedPokemon(pokemonName);
    }

    setModalVisible(!isModalVisible);
    console.log(isModalVisible);
  };

  useEffect(() => {
    const loadPokemons = async () => {
      const data = await fechPokemons();

      const fetchPokemonsData: PokemonListItem[] = await Promise.all(
        data.results.map(async (item: { name: string; url: string }) => {
          const response = await fetch(item.url);
          const details = await response.json();

          return {
            name: item.name,
            image:
              details.sprites.other?.["official-artwork"]?.front_default,
          };
        })
      );

      setPokemons(fetchPokemonsData);
    };

    loadPokemons();
  }, []);

  return (
    <View style={style.container}>
      {/* HEADER */}
      <View style={style.header}>
        <Text style={style.logo}>Pokédex</Text>
        <GearIcon size={32} color="#FFFFFF" />
      </View>

      {/* INFO */}
      <Text style={style.info}>
        Encontre seu pokemon pesquisando pelo nome ou por seu Código Pokédex.
      </Text>

      {/* SEARCH */}
      <View style={style.inputContainer}>
        <MagnifyingGlassIcon size={32} color="#FFFFFF" />
        <TextInput
          style={style.input}
          placeholder="Pesquisar"
          placeholderTextColor="#FFFFFF"
        />
      </View>

      {/* LIST */}
      <View style={style.Content}>
        <Text style={style.contentText}>Todos os Pokemons</Text>

        <FlatList
          data={pokemons}
          keyExtractor={(item) => item.name}
          renderItem={({ item, index }) => (
            <Pressable
              onPress={() => toggleModal(item.name)}
              style={style.card}
            >
              <View style={style.cardinfo}>
                <Image
                  width={60}
                  height={60}
                  source={{ uri: item.image }}
                />

                <View>
                  <Text>{index + 1}</Text>
                  <Text>{item.name}</Text>
                </View>
              </View>

              <CaretRightIcon size={32} />
            </Pressable>
          )}
        />
      </View>

      {/* FOOTER */}
      <View style={style.footer}>
        <Pressable style={style.buttonfooter}>
          <Text style={style.textfooter}>Conheça um Pokemon</Text>
        </Pressable>
      </View>

      {/* MODAL */}
      <Modal
        isVisible={isModalVisible}
        onBackdropPress={() => toggleModal()}
        swipeDirection={"down"}
        onSwipeComplete={() => toggleModal()}
        style={style.modal}
      >
        <View style={style.modalContent}>
          <Pokemon name={selectedPokemon} />
        </View>
      </Modal>
    </View>
  );
}