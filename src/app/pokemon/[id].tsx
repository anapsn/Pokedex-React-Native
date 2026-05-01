import { Text, View, Image } from "react-native";
import { style } from "./../pokemon/style";
import { useEffect, useState } from "react";
import { api } from "../services/api";

interface Props {
  name?: string | null;
}

interface Evolution {
  name: string;
  image: string;
}

export default function Pokemon({ name }: Props) {
  const [pokemon, setPokemon] = useState<any>(null);
  const [evolutions, setEvolutions] = useState<Evolution[]>([]);

  useEffect(() => {
    const loadPokemon = async () => {
      try {
        if (!name) return;

        // 🔹 Dados principais
        const response = await api.get(`/pokemon/${name}`);
        setPokemon(response.data);

        const speciesURL = response.data.species.url;

        // 🔹 Evolução
        const specieResponse = await api.get(speciesURL);
        const evolutionsURL = specieResponse.data.evolution_chain.url;

        const evolutionsResponse = await api.get(evolutionsURL);
        const evolutionsList = extractEvolutions(
          evolutionsResponse.data.chain
        );

        // 🔹 Imagens das evoluções
        const evolutionsImages = await Promise.all(
          evolutionsList.map(async (evoName) => {
            const response = await api.get(`/pokemon/${evoName}`);

            return {
              name: evoName,
              image:
                response.data.sprites.other?.["official-artwork"]
                  ?.front_default,
            };
          })
        );

        setEvolutions(evolutionsImages);
      } catch (error) {
        console.log("Erro ao carregar pokemon 👉", error);
      }
    };

    loadPokemon();
  }, [name]);

  const extractEvolutions = (chain: any): string[] => {
    const evolutions: string[] = [];
    let current = chain;

    while (current) {
      evolutions.push(current.species.name);
      current = current.evolves_to[0];
    }

    return evolutions;
  };

  return (
    <View style={style.container}>
      <Text>Pokemon</Text>

      {/* IMAGEM */}
      <View style={style.header}>
        <Image
          style={{ width: 80, height: 80 }}
          source={{
            uri: pokemon?.sprites?.other?.["official-artwork"]
              ?.front_default,
          }}
        />
      </View>

      <Text style={style.namePokemon}>{name}</Text>

      {/* INFO */}
      {pokemon && (
        <View style={style.infoPokemon}>
          <View style={style.info}>
            <Text style={style.textInfo1}>
              {pokemon.weight / 10} kg
            </Text>
            <Text>Peso</Text>
          </View>

          <View style={style.info}>
            <Text style={style.textInfo1}>
              {pokemon.height / 10} m
            </Text>
            <Text>Altura</Text>
          </View>
        </View>
      )}

      {/* EVOLUÇÕES */}
      <Text style={style.namePokemon}>Evoluções</Text>

      <View style={style.footer}>
        {evolutions.map((evo, index) => (
          <View style={style.footerCardContainer} key={index}>
            <View style={style.footerCard}>
              <Image
                style={{ width: 60, height: 60 }}
                source={{ uri: evo.image }}
              />
            </View>
            <Text>{evo.name}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}