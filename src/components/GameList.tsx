import React, { useEffect, useState } from "react";
import fetchAllGames from "../services/game-service";
import {
  CardRoot,
  CardBody,
  Image,
  Heading,
  Box,
  SimpleGrid,
} from "@chakra-ui/react";

type Game = {
  id: number;
  title: string;
  thumbnail?: string;
};

export default function GameList() {
  const [games, setGames] = useState<Game[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    fetchAllGames()
      .then((data) => {
        setGames(data);
      })
      .catch(() => {
        setError("wrong");
      })
      .finally(() => {
        setLoading(false);
      });
  }, []);

  return (
    <div>
      {loading && <p>loading...</p>}

      {error && <p style={{ color: "red" }}>{error}</p>}

      {!loading && !error && (
        <SimpleGrid columns={{ base: 1, sm: 2, md: 3, lg: 4 }} gap={6}>
          {games.map((game) => (
            <CardRoot
              key={game.id}
              overflow="hidden"
              borderRadius="lg"
              transition="all 0.2s ease-out"
              _hover={{ transform: "translateY(-2px)", boxShadow: "lg" }}
            >
              <Image src={game.thumbnail} alt={game.title} />
              <CardBody>
                <Heading size="sm">{game.title}</Heading>
              </CardBody>
            </CardRoot>
          ))}
        </SimpleGrid>
      )}
    </div>
  );
}
