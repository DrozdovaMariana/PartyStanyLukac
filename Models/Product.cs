using System.ComponentModel.DataAnnotations;
using System.ComponentModel.DataAnnotations.Schema;
using System.Text.Json.Serialization;

namespace PartyStanyLukac.Models
{
    public class Product
    {
        [Key]
        [DatabaseGenerated(DatabaseGeneratedOption.Identity)]
        [JsonPropertyName("id")]
        public int Id { get; set; }

        [Required]
        [StringLength(50)]
        [JsonPropertyName("src")]
        public string Src { get; set; } = string.Empty;

        [Required]
        [StringLength(50)]
        public string Alt { get; set; } = string.Empty;

        [Required]
        [StringLength(50)]
        [JsonPropertyName("title")]
        public string Title { get; set; } = string.Empty;

        [JsonPropertyName("stock")]
        public int? Stock { get; set; }

        [JsonPropertyName("price")]
        public decimal Price { get; set; }

        [JsonPropertyName("montage")]
        public decimal? Montage { get; set; }

        [JsonPropertyName("order")]
        public int Order { get; set; }
    }
}
