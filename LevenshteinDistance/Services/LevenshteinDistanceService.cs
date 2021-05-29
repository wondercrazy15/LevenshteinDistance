using System;

namespace LevenshteinDistance.Services
{
    public class LevenshteinDistanceService : ILevenshteinDistanceService
    {
        public (int[,], int) GetLevenshteinDistance(string string1, string string2)
        {
            int value1Length = string1.Length;
            int value2Length = string2.Length;
            int[,] matrix = new int[value1Length + 1, value2Length + 1];

            // Step 1
            if (value1Length == 0 || value2Length == 0)
            {
                return (null, 0);
            }

            // Step 2
            for (int i = 0; i <= value1Length; matrix[i, 0] = i++)
            {
            }

            for (int j = 0; j <= value2Length; matrix[0, j] = j++)
            {
            }

            // Step 3
            for (int i = 1; i <= value1Length; i++)
            {
                //Step 4
                for (int j = 1; j <= value2Length; j++)
                {
                    // Step 5
                    int cost = (string2[j - 1] == string1[i - 1]) ? 0 : 1;

                    // Step 6
                    matrix[i, j] = Math.Min(
                        Math.Min(matrix[i - 1, j] + 1, matrix[i, j - 1] + 1),
                        matrix[i - 1, j - 1] + cost);
                }
            }

            // Step 7
            return (matrix, matrix[value1Length, value2Length]);
        }
    }
}
