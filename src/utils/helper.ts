export function slugify(title: string): string {
    return title
        .toLowerCase()
        .normalize('NFD') // Chuyển tiếng Việt có dấu thành không dấu
        .replace(/[\u0300-\u036f]/g, '') // Xóa dấu
        .replace(/[^a-z0-9\s-]/g, '') // Xóa ký tự đặc biệt
        .trim()
        .replace(/\s+/g, '-') // Thay khoảng trắng bằng dấu gạch ngang
        .replace(/-+/g, '-'); // Xóa dấu gạch ngang trùng lặp
}
// Ví dụ:
// console.log(slugify('Tạ Là Vua Aladi')); // Kết quả: "ta-la-vua-aladi"

// Tách slug và ID từ params.slug
// const [slug, id] = params.slug.split('_');

// Kiểm tra ID hợp lệ (UUID)
export const uuidRegex = /^[0-9a-f]{8}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{4}-[0-9a-f]{12}$/i;
// if (!id || !uuidRegex.test(id)) {
//   notFound(); // Trả về 404 nếu ID không hợp lệ
// }
